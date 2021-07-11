export interface Image {
  href: string;
}
export interface Range {
  high: number;
  low: number;
}
export interface PriceRange {
  regular: Range;
  selling: Range;
  type: string;
}
export interface Price {
  regular: number;
  selling: number;
}
export interface Product {
  name: string;
  image: string;
  price: Price;
  hero: Image;
  thumbnail:Image;
  images: Image[];
  priceRange: PriceRange;
}
export interface DisplayProduct {
  name: string;
  price: number;
  hero: Image;
  images: Image[];
}
export interface APIResponse {
  groups: Product[];
}
