export interface Review {
    id: number;
    author: string;
    comment: string;
    stars: number;
  }
  
  export interface Restaurant {
    id: number;
    businessname: string;
    address: string;
    image: string;
    phone: string;
    restauranttype: string;
    reviews: Review[];
    parkinglot: boolean;
    email: string;
    reviewsList: Review[]; 
    slug: string;
    rating: number;
    isFavorited: boolean;
  }
  
  export interface RestaurantStore {
    restaurants: Restaurant[];
    favorites: Restaurant[];
    popularRestaurants: Restaurant[];
    toggleFavorite: (id: number) => void;
    updateRestaurant: (id: number, updatedRestaurant: Partial<Restaurant>) => void;
  }
  