import { Home, ProductInfo, Admin } from '@src/pages';
import { Routes } from '@src/constant';

export const ApplicationRoutes = [
  { path: Routes.home, element: <Home /> },
  {
    path: Routes.productInfo,
    element: <ProductInfo />,
  },
  {
    path: Routes.admin,
    element: <Admin />,
  },
];
