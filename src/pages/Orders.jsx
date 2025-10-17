import Header from '../components/Header';
import Button from '../components/Button';
import { FaMinus } from 'react-icons/fa';
import Footer from '../components/Footer';
import { FaPlus } from 'react-icons/fa';
import EmptyCart from '../components/EmptyCart';
import { FaTrash } from 'react-icons/fa';
import { REMOVE_CART } from '../actions/cart-action';
import { CartContext } from '../context/CartContext';
import { useContext, useEffect, useState } from 'react';
const OrdersPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const { cartState, dispatchCart } = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState));
    setCartItems(cartState);
  }, [cartState]);

  if (cartItems.length === 0 || cartItems.cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex-1">
        <h2 className="my-7 text-center text-xl font-semibold">Meus pedidos</h2>
        {cartItems.cart &&
          cartItems.cart.map((item) => (
            <div key={item.id} className="mx-auto flex w-[90%] gap-3 pb-7">
              <img
                src={item.imgUrl}
                alt={item.name}
                className="h-[200px] w-[280px] rounded-lg"
              />
              <div className="flex flex-col justify-center gap-2">
                <p>Nome: {item.name}</p>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço: {item.price}R$</p>
                <div className="flex gap-2">
                  <Button className="w-[40px]">
                    <FaPlus />
                  </Button>
                  <Button className="w-[40px]">
                    <FaMinus />
                  </Button>
                  <Button
                    className="w-[40px]"
                    onClick={() => REMOVE_CART(dispatchCart, item)}
                  >
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;
