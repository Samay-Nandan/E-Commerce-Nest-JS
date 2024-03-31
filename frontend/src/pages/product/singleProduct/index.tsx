import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FetchProductById } from '@store/action';
import { useAppDispatch, useAppSelector } from '@src/store';
import { Loader } from '@src/components';
import { Routes } from '@src/constant';
import { getAdminCookie } from '@src/utils';
import { AddToBasket } from '@product/helper';
import { UpdateProduct } from '@product/updateProduct';

export const SingleProduct = () => {
  const { id } = useParams();
  const { token } = getAdminCookie();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [updateProduct, setUpdateProduct] = useState(false);

  const { loading, error, product } = useAppSelector(
    ({ ProductReducer }) => ProductReducer
  );

  useEffect(() => {
    dispatch(FetchProductById(id as string));
  }, [dispatch, id]);

  useEffect(() => {
    if (error) navigate(Routes.home);
  }, [error, navigate]);

  if (loading) return <Loader />;

  const { name, description, image } = product;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="md:order-2">
        <img
          src={image}
          alt={name}
          className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="md:order-1">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-gray-700 text-lg mb-4">{description}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-4 mt-4"
          onClick={() => AddToBasket(id)}
        >
          Add to Basket
        </button>
        {token && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-4 mt-4 mx-4"
            onClick={() => setUpdateProduct(true)}
          >
            Edit Product
          </button>
        )}
        {token && updateProduct && (
          <UpdateProduct setUpdateProduct={setUpdateProduct} />
        )}
      </div>
    </div>
  );
};
