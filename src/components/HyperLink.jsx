import { Link } from 'react-router';

const HyperLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="font-semibold cursor-pointer hover:text-secondary/50 transition rounded-md"
    >
      {children}
    </Link>
  );
};

export default HyperLink;
