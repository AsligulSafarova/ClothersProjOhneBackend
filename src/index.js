import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/Contexts';
import { CategoriesProvider } from './components/Contexts/Categories.context';
import { CartProvider } from './components/Contexts/card.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider >
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


