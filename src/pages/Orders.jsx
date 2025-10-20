import Header from '../components/Header';
import Button from '../components/Button';
import { FaMinus } from 'react-icons/fa';
import Footer from '../components/Footer';
import { FaPlus } from 'react-icons/fa';
import EmptyCart from '../components/EmptyCart';
import { FaTrash } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import {
  REMOVE_CART,
  INCREMENT_CART,
  DECREMENT_CART,
} from '../actions/cart-action';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
const OrdersPage = () => {
  const { cartState, dispatchCart } = useContext(CartContext);

  if (cartState.cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 mb-3">
        <div className='flex my-7 items-center gap-3 justify-center'>
          <FaShoppingCart className='text-2xl' />
          <h2 className=" text-xl font-semibold">Carrinho</h2>
        </div>
        {cartState.cart &&
          cartState.cart.map((item) => (
            <div key={item.id} className="mx-auto flex w-[90%] gap-3 pb-7">
              <img
                src={item.imgUrl}
                alt={item.name}
                className="h-[150px] w-[200px] rounded-lg"
              />
              <div className="flex flex-col justify-center gap-2 text-sm">
                <p>{item.name}</p>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço: {item.price}R$</p>
                <div className="flex gap-2">
                  <Button onClick={() => INCREMENT_CART(dispatchCart, item)}>
                    <FaPlus />
                  </Button>
                  <Button onClick={() => DECREMENT_CART(dispatchCart, item)}>
                    <FaMinus />
                  </Button>
                  <Button onClick={() => REMOVE_CART(dispatchCart, item)}>
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className='mb-10'>
        <h2 className="text-end text-2xl font-bold mr-5">Total: {cartState.total.toFixed(2)}R$</h2>
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;
