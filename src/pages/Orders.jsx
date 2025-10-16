import Header from '../components/Header';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
const OrdersPage = () => {
  const { cartState } = useContext(CartContext);

  return (
    <div>
      <Header />
      {cartState.cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          <p>{item.price}</p>
          <img src={item.imgUrl} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
