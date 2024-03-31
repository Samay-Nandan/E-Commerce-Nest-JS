import { Layout, Navbar, Footer } from '@src/components';
import { AppRoutes } from '@src/routes';

export const App = () => (
  <Layout>
    <Navbar />
    <AppRoutes />
    <Footer />
  </Layout>
);
