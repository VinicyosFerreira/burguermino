import { Link } from 'react-router';

const HyperLink = ({ to, children, className }) => {
  const getVariant = () => {
    if (!className) {
      return 'cursor-pointer rounded-md text-lg font-semibold transition hover:text-accent/75 md:text-sm md:hover:text-accent/50';
    } else {
      return className;
    }
  };

  return (
    <Link to={to} className={getVariant()}>
      {children}
    </Link>
  );
};

export default HyperLink;
