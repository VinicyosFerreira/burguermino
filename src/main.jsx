import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/Home.jsx';
import MenuPage from './pages/Menu.jsx';
import CheckoutPage from './pages/Checkout.jsx';
import NotFoundPage from './pages/NotFound.jsx';
import './index.css';
import { CartContextProvider } from './context/CartContext.jsx';
import CartPage from './pages/Cart.jsx';
import { Toaster } from 'sonner';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <Toaster />
      <RouterProvider router={router} />
    </CartContextProvider>
  </StrictMode>
);
