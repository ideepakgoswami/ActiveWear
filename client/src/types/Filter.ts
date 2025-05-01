export interface FilterContextType {
  category: string;
  setCategory: (category: string) => void;
  price: [number, number];
  setPrice: (price: [number, number]) => void;
  rating: number;
  setRating: (rating: number) => void;
}
