export interface ProductDto {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface ProductState {
  loading: boolean;
  products: ProductDto[];
  product: ProductDto;
  error: string;
}
