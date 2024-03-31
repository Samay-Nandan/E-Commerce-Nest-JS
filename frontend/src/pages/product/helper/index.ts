import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import { getUserCookie, setUserCookie } from '@src/utils';
import {
  ITEM_SUCCESSFULLY_ADDED_TO_YOUR_CART,
  THIS_PRODUCT_IS_ALREADY_IN_YOUR_CART,
} from '@src/constant';

export const AddToBasket = (productId: string | undefined) => {
  if (!productId) return;
  if (!getUserCookie()._id) {
    setUserCookie({ _id: v4(), cart: [productId] });
    toast.success(ITEM_SUCCESSFULLY_ADDED_TO_YOUR_CART, {
      toastId: ITEM_SUCCESSFULLY_ADDED_TO_YOUR_CART,
    });
    return;
  }
  if (getUserCookie().cart.includes(productId)) {
    toast.info(THIS_PRODUCT_IS_ALREADY_IN_YOUR_CART, {
      toastId: THIS_PRODUCT_IS_ALREADY_IN_YOUR_CART,
    });
    return;
  }
  setUserCookie({
    ...getUserCookie(),
    cart: [...getUserCookie().cart, productId],
  });
};
