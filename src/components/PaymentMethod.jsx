import Button from '../components/Button';

const PaymentMethod = ({ prevStep }) => {
  return (
    <div>
      <h2>Metodo de pagamento</h2>
      <Button>Concluir compra</Button>
      <Button onClick={() => prevStep()}>Voltar</Button>
    </div>
  );
};

export default PaymentMethod;
