import { useEffect } from 'react';
import { FetchAllProduct } from '@store/action';
import { useAppDispatch, useAppSelector } from '@src/store';
import { Loader } from '@src/components';
import { ProductDto } from '@store/dto';
import { Product } from '@home/product';

export const ProductListing = () => {
  const dispatch = useAppDispatch();
  const { loading, products } = useAppSelector(
    ({ ProductReducer }) => ProductReducer
  );

  useEffect(() => {
    dispatch(FetchAllProduct());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="p-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product: ProductDto) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
