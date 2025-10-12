import Button from './Button';

const PromotionCampaign = () => {
  return (
    <div className="mx-8 my-12 space-y-2 md:w-[35%]">
      <h2 className="text-xl font-semibold text-primary">
        Campanha de promoção
      </h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-secondary">
          Digite seu e-mail para receber nossas promoções exclusivas:{' '}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          className="rounded-md border border-primary p-2 text-secondary outline-accent"
        />
        <Button className="w-[280px]">Enviar</Button>
      </div>
    </div>
  );
};

export default PromotionCampaign;
