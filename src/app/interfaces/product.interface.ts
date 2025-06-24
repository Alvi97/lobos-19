export interface ProductMedia {
  targetAttr: string;
  path: string;
  sortOrder: number;
}

export interface ProductDetail {
  title: string;
  text: string;
  iconTarget: string;
  sortOrder: number;
  imageSrc:string | undefined;
}

export interface ProductDetailsSection {
  title: string;
  data: ProductDetail[];
  mainImage?:string
}

export interface ProductSpecification {
  title: string;
  text: string;
  iconTarget: string;
  sortOrder: number;
  imageSrc:string | undefined
}

export interface ProductSpecificationsSection {
  title: string;
  data: ProductSpecification[];
  mainImage?: string;
}

export interface Product {
  id: string;
  category: string;
  title: string;
  subTitle: string;
  sku: string;
  shortDescription: string;
  isActive: boolean;
  medias: ProductMedia[];
  productDetails: ProductDetailsSection;
  productSpecifications: ProductSpecificationsSection;
  relatedProducts: string[];
}

export interface ProductPrice {
  id: string;
  sku: string;
  isActive: boolean;
  price: number;
  priceFormatted: string;
}

export interface ProductWithPrice extends Product {
  priceData?: ProductPrice;
  formattedPrice?: string;
  numericPrice?: number;
}

export interface ProductImages {
  mainImage?: string;
  sliderImage?: string;
  gallery: string[];
  details: {
    detail1?: string;
    detail2?: string;
  };
  icons: {
    [key: string]: string;
  };
}

export interface ProcessedProduct extends ProductWithPrice {
  images: ProductImages;
  // sortedDetails: ProductDetail[];
  // sortedSpecifications: ProductSpecification[];
}

export interface SliderState {
  currentIndex: number;
  itemsPerView: number;
  itemWidth: number;
  totalItems: number;
}

export interface FilterOptions {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  activeOnly: boolean;
}

export interface PriceStats {
  min: number;
  max: number;
  average: number;
  count: number;
}
