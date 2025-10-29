import {
  REMOVE_CART,
  INCREMENT_CART,
  DECREMENT_CART,
} from '../actions/cart-action';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import EmptyCart from './EmptyCart';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import Button from './Button';

const Cart = ({ nextStep }) => {
  const { cartState, dispatchCart } = useContext(CartContext);

  if (cartState.cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
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

      <div className="mb-10 flex flex-col items-end justify-end gap-2 px-5">
        <h2 className="text-2xl font-bold">
          Total: {cartState.total.toFixed(2)}R$
        </h2>
        <Button className="w-[200px]" onClick={() => nextStep()}>
          Finalizar compra
        </Button>
      </div>
    </div>
  );
};

export default Cart;
