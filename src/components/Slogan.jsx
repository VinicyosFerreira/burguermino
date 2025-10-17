import imgSlogan from '../assets/imgs/img-slogan.png';

const Slogan = () => {
  return (
    <div className="flex h-[350px] items-center rounded-md bg-primary text-foreground">
      <div className="break-word flex flex-col px-2 text-2xl font-semibold md:p-5 md:text-6xl">
        <h2>Uma explosão de experiências </h2>
        <h2>e sabores inesquecíveis !</h2>
      </div>
      <div className="w-[90%] md:w-[500px]">
        <img src={imgSlogan} alt="Imagem do Slogan" />
      </div>
    </div>
  );
};

export default Slogan;
