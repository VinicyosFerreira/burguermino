import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-foreground flex justify-around items-center p-2">
      <div>
        <p className="text-sm font-semibold mb-2">Nossas Unidades</p>
        <div className=" grid grid-cols-2 gap-3">
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
      <div className="flex gap-3 cursor-pointer">
        <FaFacebook className="text-3xl" />
        <FaInstagram className="text-3xl" />
        <FaWhatsapp className="text-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
