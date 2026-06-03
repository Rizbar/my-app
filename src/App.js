import React from 'react';
import styled from 'styled-components';

// Membuat komponen Button dengan styling dan efek hover
const Button = styled.button`
  background-color: #4CAF50; /* Warna hijau */
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  /* Efek saat hover */
  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  /* Efek saat aktif (klik) */
  &:active {
    transform: scale(0.98);
  }
`;

// Membuat komponen Heading (h1, h2, h3, h4, h5, h6) dengan styling
const Heading = styled.h1`
  font-family: 'Arial, sans-serif';
  color: #333;
  font-size: ${(props) => props.size || '32px'};
  margin: 20px 0;
  text-align: center;

  /* Efek hover */
  &:hover {
    color: #007bff;
  }
`;

const App = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      {/* Heading dengan ukuran default */}
      <Heading>Styled Heading</Heading>
      
      {/* Heading dengan ukuran tertentu */}
      <Heading size="24px">Subheading</Heading>
      
      {/* Button dengan efek hover */}
      <Button>Click Me</Button>
    </div>
  );
};

export default App;