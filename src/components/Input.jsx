const Input = ({ label, width = 'w-full', ...rest }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${width}`}>
      <label htmlFor={rest.id} className="self-start text-sm">
        {label}
      </label>
      <input
        className="w-full rounded-md border border-primary p-2 text-secondary outline-accent"
        {...rest}
      />
    </div>
  );
};

export default Input;
