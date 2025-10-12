import HyperLink from './HyperLink';

const Button = ({ children, to, variant = {}, className, ...props }) => {
  const classButton = `rounded-lg text-center p-3 text-sm 
  font-semibold transition`;
  const getVariantColor = () => {
    switch (variant.color) {
      case 'ghost':
        return 'bg-transparent text-primary hover:text-accent';
      default:
        return 'bg-primary  text-foreground  hover:bg-accent';
    }
  };

  if (variant.type === 'link') {
    return (
      <HyperLink to={to} className={`${classButton} ${getVariantColor()}`}>
        {children}
      </HyperLink>
    );
  }

  return (
    <button
      className={`${classButton} ${getVariantColor()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
