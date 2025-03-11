import React from 'react';
import '../styles/global.css';

export const metadata = {
  title: 'Calculatrice',
  description: 'Une calculatrice simple en React',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body> 
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
