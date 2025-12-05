import React from 'react';

export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  isHot?: boolean;
  isNew?: boolean;
  merchant: string;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}