import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import Cart from '../components/Cart';
import CustomerData from '../components/CustomerData';
import PaymentMethod from '../components/PaymentMethod';
import { GiNotebook } from 'react-icons/gi';
import { useState } from 'react';
const OrdersPage = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((stepParams) => stepParams + 1);
  };

  const prevStep = () => {
    setStep((stepParams) => stepParams - 1);
  };

  const steps = [
    {
      title: 'Carrinho',
      icon: <FaShoppingCart className="text-2xl" />,
      component: <Cart nextStep={nextStep} />,
    },
    {
      title: 'Dados do cliente',
      icon: <GiNotebook className="text-2xl" />,
      component: <CustomerData nextStep={nextStep} prevStep={prevStep} />,
    },
    {
      title: 'Método de pagamento',
      icon: <MdOutlinePayment className="text-2xl" />,
      component: <PaymentMethod prevStep={prevStep} />,
    },
  ];

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="mb-3 flex-1">
        <div className="my-7 flex items-center justify-center gap-3">
          {steps[step].icon}
          <h2 className="text-xl font-semibold">{steps[step].title}</h2>
        </div>
        {steps[step].component}
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;
