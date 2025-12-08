import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="items-center justify-around space-y-4 bg-primary p-2 text-foreground md:flex">
      <div>
        <p className="mb-2 text-center text-sm font-semibold">
          Nossas Unidades
        </p>
        <div className="grid grid-cols-2 place-items-center gap-1 md:gap-3">
          <p>Curitiba</p>
          <p>Joinville</p>
          <p>Foz do Iguaçu</p>
          <p>Ponta Grossa</p>
          <p>Palhoça</p>
          <p>Guarapuava</p>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Burguermino</h2>
        <span className="text-sm">Todos os direitos reservados</span>
      </div>
      <div className="flex cursor-pointer justify-center gap-3">
        <FaFacebook className="text-3xl hover:scale-110" />
        <FaInstagram className="text-3xl hover:scale-110" />
        <FaWhatsapp className="text-3xl hover:scale-110" />
      </div>
    </footer>
  );
};

export default Footer;
