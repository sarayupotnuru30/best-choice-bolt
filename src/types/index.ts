export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  images: string[];
  category: string;
  categorySlug: string;
  brand: string;
  description: string;
  specifications: Record<string, string>;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
  description?: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

export interface FilterState {
  priceRange: [number, number];
  brands: string[];
  inStockOnly: boolean;
  sortBy: 'relevance' | 'price-low' | 'price-high' | 'newest' | 'rating';
}

export type ViewMode = 'grid' | 'list';
