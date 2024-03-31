import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface UpdateProductProps {
  setUpdateProduct: (value: boolean) => void;
}

export interface ProductFormData {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ProductFormInputProps {
  register: UseFormRegister<ProductFormData>;
  name: string;
  label: string;
  type: string;
  errors: FieldErrors;
  step?: number;
}
