import Carousel from './Carousel';
import burgerChicken from '../assets/imgs/burger-chicken.jpg';
import burgerExplosive from '../assets/imgs/burger-explosive.jpg';
import cheeseburgerDouble from '../assets/imgs/cheeseburger-double.jpg';
import simpleBurger from '../assets/imgs/burger-simple.jpg';
import veganoBurger from '../assets/imgs/vegano-burger.jpg';

const MainBurgers = () => {
  const OPTIONS = {};
  const MAIN_BURGER = [
    { id: 1, imgUrl: burgerChicken },
    { id: 2, imgUrl: burgerExplosive },
    { id: 3, imgUrl: cheeseburgerDouble },
    { id: 4, imgUrl: simpleBurger },
    { id: 5, imgUrl: veganoBurger },
  ];

  return (
    <div className="my-5">
      <h2 className="text-2xl text-primary text-center font-semibold my-7">
        Confira nossos deliciosos hambúrgueres
      </h2>
      <Carousel burgers={MAIN_BURGER} options={OPTIONS} />
    </div>
  );
};

export default MainBurgers;
