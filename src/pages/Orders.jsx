import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import Cart from '../components/Cart';
import CustomerData from '../components/CustomerData';
import PaymentMethod from '../components/PaymentMethod';
import { GiNotebook } from 'react-icons/gi';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../schemas/form-schema';
const OrdersPage = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((stepParams) => stepParams + 1);
  };

  const prevStep = () => {
    setStep((stepParams) => stepParams - 1);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      cpf: '',
      cep: '',
      address: '',
      houseNumber: '',
      paymentSchema: {
        paymentMethods: '',
        cardNumber: '',
        cardHolder: '',
        cardExpirationDate: '',
        cardCvv: '',
      },
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
      component: (
        <CustomerData
          nextStep={nextStep}
          prevStep={prevStep}
          errors={errors}
          register={register}
        />
      ),
    },
    {
      title: 'Método de pagamento',
      icon: <MdOutlinePayment className="text-2xl" />,
      component: (
        <PaymentMethod
          prevStep={prevStep}
          watch={watch}
          register={register}
          errors={errors}
        />
      ),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mb-3 flex-1">
        <div className="my-7 flex items-center justify-center gap-3">
          {steps[step].icon}
          <h2 className="text-xl font-semibold">{steps[step].title}</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>{steps[step].component}</form>
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;
