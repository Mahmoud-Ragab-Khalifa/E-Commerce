export interface Product {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  description: string;
  rating: number;
}

export interface Review {
  reviewerName: string;
  rating: number;
  comment: string;
}

export interface ImageProbs {
  name: string;
  src: string;
}
