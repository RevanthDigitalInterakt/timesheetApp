// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill">
        <Container className="my-5">
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
