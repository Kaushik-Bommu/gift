const https = require('https');
const fs = require('fs');
const path = require('path');

const textures = {
  sun: '2k_sun.jpg',
  mercury: '2k_mercury.jpg',
  venus: '2k_venus_surface.jpg',
  earth: '2k_earth_daymap.jpg',
  mars: '2k_mars.jpg',
  jupiter: '2k_jupiter.jpg',
  saturn: '2k_saturn.jpg',
  saturn_ring: '2k_saturn_ring_alpha.png',
  uranus: '2k_uranus.jpg',
  neptune: '2k_neptune.jpg'
};

const baseUrl = 'https://www.solarsystemscope.com/textures/download/';
const targetDir = path.join(__dirname, 'app', 'public', 'textures');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

Object.entries(textures).forEach(([name, filename]) => {
  const fileUrl = baseUrl + filename;
  const filePath = path.join(targetDir, `${name}${path.extname(filename)}`);
  
  https.get(fileUrl, {headers: {'User-Agent': 'Mozilla/5.0'}}, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${name}`);
      });
    } else {
      console.log(`Failed to download ${name}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${name}: ${err.message}`);
  });
});
