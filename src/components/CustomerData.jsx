import Button from '../components/Button';

const CustomerData = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h2>Customer Data</h2>
      <Button onClick={() => nextStep()}>Avançar</Button>
      <Button onClick={() => prevStep()}>Voltar</Button>
    </div>
  );
};

export default CustomerData;
