import { FC } from 'react';
import { ProductFormData, ProductFormInputProps } from '@product/dto';

export const ProductFormInput: FC<ProductFormInputProps> = ({
  register,
  name,
  label,
  type,
  errors,
  step,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      {...register(name as keyof ProductFormData, {
        required: `${label} is required`,
      })}
      placeholder={label}
      type={type}
      className={`mt-1 block w-full px-3 py-2 bg-white border ${
        errors[name] ? 'border-red-500' : 'border-gray-300'
      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
      step={step}
    />
    {errors[name] && (
      <span className="text-xs text-red-500">{label} is required</span>
    )}
  </div>
);
