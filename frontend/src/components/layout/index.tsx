import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);
