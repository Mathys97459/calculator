import React from 'react';

export const metadata = {
  title: 'Calculatrice',
  description: 'Une calculatrice simple en React',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body> 
        <header>
          <h1>Bienvenue sur la Calculatrice</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
