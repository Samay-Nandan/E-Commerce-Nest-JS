import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '@src/components';
import { ApplicationRoutes } from '@routes/config';

export const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {ApplicationRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);
