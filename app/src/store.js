import { create } from 'zustand';

export const useStore = create((set) => ({
  hoveredPlanet: null,
  setHoveredPlanet: (planetId) => set({ hoveredPlanet: planetId }),
  
  // Transition state when a planet is clicked
  transitioningTo: null,
  setTransitioningTo: (planetId) => set({ transitioningTo: planetId }),
}));
