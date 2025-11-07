import { FaPix } from 'react-icons/fa6';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';
import Input from './Input';
import Button from '../components/Button';

const PaymentMethod = ({ prevStep, register, errors, watch }) => {
  const paymentMethods = watch('paymentSchema.paymentMethods');

  return (
    <div className="mx-auto flex w-[450px] flex-col gap-2 rounded-md bg-foreground/10 p-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <FaPix className="text-2xl text-green-700" />
          <label htmlFor="pix">Pix</label>
        </div>
        <input
          {...register('paymentSchema.paymentMethods')}
          type="radio"
          id="pix"
          value="pix"
          className="size-4"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <BsCreditCard2BackFill className="text-2xl text-blue-800" />
          <label htmlFor="credit-card">Cartão de crédito</label>
        </div>
        <input
          {...register('paymentSchema.paymentMethods')}
          type="radio"
          id="credit-card"
          value="credit-card"
          className="size-4"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <GiMoneyStack className="text-2xl text-green-800" />
          <label htmlFor="cash">Dinheiro</label>
        </div>
        <input
          {...register('paymentSchema.paymentMethods')}
          type="radio"
          id="cash"
          value="cash"
          className="size-4"
        />
      </div>

      {errors.paymentSchema?.paymentMethods && !paymentMethods && (
        <p className="text-sm text-red-500">
          {errors.paymentSchema?.paymentMethods?.message}
        </p>
      )}

      {paymentMethods === 'credit-card' && (
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            {...register('paymentSchema.cardNumber')}
            id="cardNumber"
            label="Número do cartão"
            placeholder="Digite o número do cartão"
          />
          <p className="text-sm text-red-500">
            {errors.paymentSchema?.cardNumber?.message}
          </p>

          <Input
            type="text"
            {...register('paymentSchema.cardHolder')}
            id="cardHolder"
            label="Titular do cartão"
            placeholder="Digite o titular do cartão"
          />
          <p className="text-sm text-red-500">
            {errors.paymentSchema?.cardHolder?.message}
          </p>

          <div className="flex w-full gap-2">
            <Input
              label="Data de vencimento"
              {...register('paymentSchema.cardExpirationDate')}
              type="date"
              id="cardExpirationDate"
              width="w-[70%]"
              placeholder="Data de vencimento"
            />

            <Input
              label="CVV"
              {...register('paymentSchema.cardCvv')}
              type="text"
              width="CVV"
              id="cardCvv"
              placeholder="CVV"
            />
          </div>

          <div className="flex justify-between">
            <p className="text-sm text-red-500">
              {errors.paymentSchema?.cardExpirationDate?.message}
            </p>
            <p className="text-end text-sm text-red-500">
              {errors.paymentSchema?.cardCvv?.message}
            </p>
          </div>
        </div>
      )}

      <div className="mt-2 flex w-full items-center justify-between">
        <Button className="w-[200px]" type="submit">
          Concluir compra
        </Button>
        <Button className="w-[200px]" onClick={() => prevStep()}>
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethod;
