import { create } from 'zustand';
import { Restaurant } from '../types';

interface RestaurantStore {
  restaurants: Restaurant[];
  popularRestaurants: Restaurant[];
  favorites: Restaurant[];
  toggleFavorite: (id: number) => void;
  updateRestaurant: (id: number, updatedData: Partial<Restaurant>) => void;
  initializeRestaurants: (data: Restaurant[]) => void; 
}

export const useRestaurantStore = create<RestaurantStore>((set) => ({
  restaurants: [],
  popularRestaurants: [],
  favorites: [],
  toggleFavorite: (id: number) => {
    set((state) => {
      const isAlreadyFavorite = state.favorites.some((fav) => fav.id === id);
      const updatedFavorites = isAlreadyFavorite
        ? state.favorites.filter((fav) => fav.id !== id)
        : [...state.favorites, state.restaurants.find((restaurant) => restaurant.id === id)!];
      return { favorites: updatedFavorites };
    });
  },
  updateRestaurant: (id: number, updatedData: Partial<Restaurant>) => {
    set((state) => {
      const updatedRestaurants = state.restaurants.map((restaurant) => 
        restaurant.id === id ? { ...restaurant, ...updatedData } : restaurant
      );
      return { restaurants: updatedRestaurants };
    });
  },
  initializeRestaurants: (data: Restaurant[]) => set({ restaurants: data, popularRestaurants: data }), 
}));
