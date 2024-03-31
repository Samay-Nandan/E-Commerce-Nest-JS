import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '@src/constant';
import { ProductListingProps } from '@home/dto';

export const Product: FC<ProductListingProps> = ({ product }) => (
  <Link to={Routes.productInfo.replace(':id', product.id)}>
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center h-full">
      <div className="text-center">
        <img
          className="w-48 mx-auto mb-4 cursor-pointer"
          src={product.image}
          alt={product.name}
        />
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
      </div>
      <div className="mt-4 text-green-600 font-bold">
        Price: {product.price}
      </div>
    </div>
  </Link>
);
