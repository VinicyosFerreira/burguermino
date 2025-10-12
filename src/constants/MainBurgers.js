import chickenBurger from '../assets/imgs/burger-chicken.jpg';
import explosiveBurger from '../assets/imgs/burger-explosive.jpg';
import cheeseBurger from '../assets/imgs/cheeseburger-double.jpg';
import simpleBurger from '../assets/imgs/burger-simple.jpg';
import veganoBurger from '../assets/imgs/vegano-burger.jpg';
import burgerWithFries from '../assets/imgs/burger-with-fries.jpg';

export const MAIN_BURGERS = [
  {
    id: 1,
    name: 'Tradicional Burger',
    price: 17.99,
    imgUrl: simpleBurger,
    description: `Pão de hambúrguer, hambúrguer, queijo, 
          mussarela, alface, tomate, maionese, sal, 
          óleo de soja.`,
  },
  {
    id: 2,
    name: 'Chicken Burger',
    price: 20.99,
    imgUrl: chickenBurger,
    description: `Pão de hambúrguer, queijo, 
          mussarela, alface, chickens, maionese, sal, 
          óleo de soja.`,
  },
  {
    id: 3,
    name: 'Explosion Burger',
    price: 30.99,
    imgUrl: explosiveBurger,
    description: `Pão de hambúrguer, hambúrguer grande, queijo, 
          mussarela, 2 ovos fritos, alface , picles, tomate, maionese, bacon, sal, 
          óleo de soja.`,
  },
  {
    id: 4,
    name: 'Double Cheeseburger',
    price: 27.99,
    imgUrl: cheeseBurger,
    description: `Pão de hambúrguer, hambúrguer duplo, 
          2 fatias de mussarela, 2 fatias de queijo cheddar, alface, tomate, maionese, sal, 
          óleo de soja.`,
  },
  {
    id: 5,
    name: 'Vegetarian Burger',
    price: 25.99,
    imgUrl: veganoBurger,
    description: `Pão integral com sementes, hambúrguer com sementes de lentinha/grão de bico, 
          ovo, alface, tomate.`,
  },
  {
    id: 6,
    name: 'Burger with Fries',
    price: 24.99,
    imgUrl: burgerWithFries,
    description: `Pão de hambúrguer, hambúrguer grande, 
        1 fatias de mussarela, 1 fatia de queijo cheddar, alface, tomate, maionese, sal, 
        óleo de soja + 250g de fritas.`,
  },
];
