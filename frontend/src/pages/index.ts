import { lazily } from '@src/utils';

export const Home = lazily(import('@pages/home'), 'Home');
export const ProductInfo = lazily(import('@pages/product'), 'ProductInfo');
export const Admin = lazily(import('@pages/admin'), 'Admin');
