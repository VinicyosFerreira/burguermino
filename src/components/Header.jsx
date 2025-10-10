import { LiaHamburgerSolid } from 'react-icons/lia';
import HyperLink from './HyperLink';
const Header = () => {
  return (
    <header className="flex justify-between bg-white items-center h-12 w-full px-2 sticky top-0 left-0 z-30">
      <div className="flex">
        <LiaHamburgerSolid className="text-4xl" />
        <h1 className="text-primary font-bold text-2xl">Burguermino</h1>
      </div>
      <nav className="space-x-5 ">
        <HyperLink to="/">Home</HyperLink>
        <HyperLink to="/menu">Cardápio</HyperLink>
        <HyperLink to="/orders">Pedidos</HyperLink>
      </nav>
    </header>
  );
};

export default Header;
