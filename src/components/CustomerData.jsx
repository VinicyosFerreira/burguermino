import { useContext, useEffect } from 'react';
import Button from '../components/Button';
import Input from './Input';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router';

const CustomerData = ({ nextStep, register, errors }) => {
  const { cartState } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartState.cart.length === 0) {
      navigate('/cart');
    }
  }, [cartState.cart, navigate]);

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-2 rounded-md bg-foreground/10 p-5 md:w-[450px]">
      <Input
        {...register('name')}
        label="Nome"
        type="text"
        id="name"
        name="name"
        placeholder="Digite seu nome"
      />
      <p className="text-sm text-red-500">{errors.name?.message}</p>

      <Input
        {...register('cpf')}
        label="CPF"
        type="text"
        id="cpf"
        name="cpf"
        placeholder="Digite seu CPF"
      />

      <p className="text-sm text-red-500">{errors.cpf?.message}</p>
      <Input
        {...register('cep')}
        label="CEP"
        type="text"
        id="cep"
        name="cep"
        placeholder="Digite seu CEP"
      />
      <p className="text-sm text-red-500">{errors.cep?.message}</p>

      <div className="flex w-full gap-2">
        <Input
          {...register('address')}
          label="Endereço"
          type="text"
          id="address"
          width="w-[70%]"
          name="address"
          placeholder="Digite seu endereço"
        />

        <Input
          {...register('houseNumber')}
          label="Número"
          type="text"
          width="w-[30%]"
          id="houseNumber"
          name="houseNumber"
          placeholder="Número"
        />
      </div>

      <div className="flex justify-between">
        <p className="text-sm text-red-500">{errors.address?.message}</p>
        <p className="text-end text-sm text-red-500">
          {errors.houseNumber?.message}
        </p>
      </div>

      <div className="mt-2 flex w-full items-center justify-between">
        <Button onClick={() => nextStep()} className="w-full">
          Avançar
        </Button>
      </div>
    </div>
  );
};

export default CustomerData;
