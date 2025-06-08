// src/components/Footer.tsx
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => (
  <footer className="bg-dark text-light text-center py-3 mt-auto">
    <Container>
      <small>© {new Date().getFullYear()} TimesheetApp. All rights reserved.</small>
    </Container>
  </footer>
);

export default Footer;
