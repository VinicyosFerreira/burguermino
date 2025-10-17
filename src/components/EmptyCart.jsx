import Header from './Header';
import Footer from './Footer';
import Button from './Button';

const EmptyCart = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center gap-3">
        <h2 className="text-2xl font-semibold">O carrinho está vazio</h2>
        <Button variant={{ type: 'link' }} to="/menu">
          Ir para o cardápio
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default EmptyCart;
