import React from 'react';
import { Product, Category } from './types';
import { 
  Car, 
  Baby, 
  Shirt, 
  Monitor, 
  Headphones, 
  Clapperboard, 
  ShoppingBasket, 
  HeartPulse, 
  Utensils, 
  Wrench, 
  Tent, 
  Plane, 
  Gamepad2, 
  MoreHorizontal 
} from 'lucide-react';

import travelKoreaImg from './assets/products/travel_korea_winter_1768453826206.png';
import pizzaComboImg from './assets/products/pizza_combo_meal_1768453841879.png';
import ledH4Img from './assets/products/led_headlight_h4_1768453857286.png';
import salonImg from './assets/products/salon_treatment_premium_1768453882438.png';
import contourImg from './assets/products/beauty_contour_lift_1768453898026.png';
import pizzaMajorImg from './assets/products/pizza_major_colonel_1768453912878.png';
import ledH11Img from './assets/products/led_headlight_h11_1768453928529.png';
import ledHb3Img from './assets/products/led_headlight_hb3_1768453943240.png';
import ledHb4Img from './assets/products/led_headlight_hb4_1768453957623.png';

export const CATEGORIES: Category[] = [
  { id: 'auto', name: 'Automotive & Motorcycles', icon: <Car size={20} /> },
  { id: 'baby', name: 'Babies & Kids', icon: <Baby size={20} /> },
  { id: 'fashion', name: 'Clothing & Accessories', icon: <Shirt size={20} /> },
  { id: 'tech', name: 'Computers & Mobile', icon: <Monitor size={20} /> },
  { id: 'electronics', name: 'Electronics & Appliances', icon: <Headphones size={20} /> },
  { id: 'movies', name: 'Entertainment & Movies', icon: <Clapperboard size={20} /> },
  { id: 'grocery', name: 'Groceries', icon: <ShoppingBasket size={20} /> },
  { id: 'beauty', name: 'Health & Beauty', icon: <HeartPulse size={20} /> },
  { id: 'food', name: 'Restaurant', icon: <Utensils size={20} /> },
  { id: 'services', name: 'Services', icon: <Wrench size={20} /> },
  { id: 'outdoor', name: 'Sporting & Outdoor', icon: <Tent size={20} /> },
  { id: 'travel', name: 'Travel & Leisure', icon: <Plane size={20} /> },
  { id: 'gaming', name: 'Video Games & Gaming', icon: <Gamepad2 size={20} /> },
  { id: 'others', name: 'Others', icon: <MoreHorizontal size={20} /> },
];

export const POPULAR_PERKS: Product[] = [
  {
    id: '1',
    title: 'Winter in KOREA (5D4N)',
    category: 'Travel & Leisure',
    price: 42888,
    originalPrice: 46388,
    image: travelKoreaImg,
    rating: 4.9,
    reviews: 342,
    isHot: true,
    merchant: 'StrideFlyer Travel and Tours',
  },
  {
    id: '2',
    title: 'Buy 3 CAPTAIN MAJOR & 1.5L Coke',
    category: 'Restaurant',
    price: 447,
    originalPrice: 566,
    image: pizzaComboImg,
    rating: 4.7,
    reviews: 128,
    merchant: 'Captain Philippines Pizza',
  },
  {
    id: '3',
    title: 'K570.3 H4 LED Headlight 5% Off',
    category: 'Automotive & Motorcycles',
    price: 7351,
    originalPrice: 8370,
    image: ledH4Img,
    rating: 4.5,
    reviews: 56,
    isNew: true,
    merchant: 'Keon Sondra Corporation',
  },
  {
    id: '4',
    title: 'Ferdie Salon Premium Treatment',
    category: 'Health & Beauty',
    price: 950,
    originalPrice: 1400,
    image: salonImg,
    rating: 4.8,
    reviews: 890,
    merchant: 'Ferdie Ilagan Salon & Spa',
  },
  {
    id: '5',
    title: '50% OFF on Lift & Contour',
    category: 'Health & Beauty',
    price: 35000,
    originalPrice: 70000,
    image: contourImg,
    rating: 5.0,
    reviews: 12,
    merchant: 'The Vibe Holistic Medical Aesthetics',
  },
  {
    id: '6',
    title: 'BUY MAJOR OR COLONEL',
    category: 'Restaurant',
    price: 139,
    originalPrice: 149,
    image: pizzaMajorImg,
    rating: 4.2,
    reviews: 45,
    merchant: 'Captain Philippines Pizza',
  },
  {
      id: '7',
      title: 'K570.3 H11 LED Headlight',
      category: 'Automotive & Motorcycles',
      price: 7695,
      originalPrice: 8100,
      image: ledH11Img,
      rating: 4.6,
      reviews: 23,
      merchant: 'Keon Sondra Corporation',
  }
];

export const DAILY_DROPS: Product[] = [
  {
    id: '8',
    title: 'K570.3 HB3 5% Off',
    category: 'Automotive & Motorcycles',
    price: 7695,
    originalPrice: 8100,
    image: ledHb3Img,
    rating: 4.9,
    reviews: 10,
    isHot: true,
    merchant: 'Keon Sondra Corporation',
  },
  {
    id: '9',
    title: 'K570.3 HB4 5% Off',
    category: 'Automotive & Motorcycles',
    price: 7695,
    originalPrice: 8100,
    image: ledHb4Img,
    rating: 4.8,
    reviews: 8,
    merchant: 'Keon Sondra Corporation',
  }
];