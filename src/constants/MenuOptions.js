import chickenBurger from '../assets/imgs/burger-chicken.jpg';
import explosiveBurger from '../assets/imgs/burger-explosive.jpg';
import cheeseBurger from '../assets/imgs/cheeseburger-double.jpg';
import simpleBurger from '../assets/imgs/burger-simple.jpg';
import veganoBurger from '../assets/imgs/vegano-burger.jpg';
import burgerWithFries from '../assets/imgs/burger-with-fries.jpg';
import OnionRings from '../assets/imgs/onion-rings.jpg';
import CocaCola from '../assets/imgs/coca-cola.png';
import Pepsi from '../assets/imgs/pepsi.webp';
import FantaUva from '../assets/imgs/fanta-uva.png';
import FantaLaranja from '../assets/imgs/fanta-laranja.jpg';

export const MENU_OPTIONS = [
  {
    id: 1,
    name: 'Tradicional Burger',
    price: 17.99,
    imgUrl: simpleBurger,
    description: `Pão de hambúrguer, hambúrguer, queijo, 
          mussarela, alface, tomate, maionese, sal, 
          óleo de soja.`,
    optionType: 'BURGER',
    highlight: true,
  },
  {
    id: 2,
    name: 'Chicken Burger',
    price: 20.99,
    imgUrl: chickenBurger,
    description: `Pão de hambúrguer, queijo, 
          mussarela, alface, chickens, maionese, sal, 
          óleo de soja.`,
    optionType: 'BURGER',
  },
  {
    id: 3,
    name: 'Explosion Burger',
    price: 30.99,
    imgUrl: explosiveBurger,
    description: `Pão de hambúrguer, hambúrguer grande, queijo, 
          mussarela, 2 ovos fritos, alface , picles, tomate, maionese, bacon, sal, 
          óleo de soja.`,
    optionType: 'BURGER',
    highlight: true,
  },
  {
    id: 4,
    name: 'Double Cheeseburger',
    price: 27.99,
    imgUrl: cheeseBurger,
    description: `Pão de hambúrguer, hambúrguer duplo, 
          2 fatias de mussarela, 2 fatias de queijo cheddar, alface, tomate, maionese, sal, 
          óleo de soja.`,
    optionType: 'BURGER',
    highlight: true,
  },
  {
    id: 5,
    name: 'Vegetarian Burger',
    price: 25.99,
    imgUrl: veganoBurger,
    description: `Pão integral com sementes, hambúrguer com sementes de lentinha/grão de bico, 
          ovo, alface, tomate.`,
    optionType: 'BURGER',
    highlight: true,
  },
  {
    id: 6,
    name: 'Burger with Fries',
    price: 24.99,
    imgUrl: burgerWithFries,
    description: `Pão de hambúrguer, hambúrguer grande, 
        1 fatias de mussarela, 1 fatia de queijo cheddar, alface, tomate, maionese, sal, 
        óleo de soja + 250g de fritas.`,
    optionType: 'BURGER',
  },
  {
    id: 7,
    name: 'Onion Rings',
    price: 21.79,
    imgUrl: OnionRings,
    description:
      '250g de anéis de cebolas crocante e 1 potinho de molho especial',
    optionType: 'BURGER',
  },
  {
    id: 11,
    name: 'Coca Cola',
    price: 6,
    imgUrl: CocaCola,
    description: 'Refrigerante Coca-Cola 350ML',
    optionType: 'DRINK',
  },
  {
    id: 12,
    name: 'Pepsi',
    price: 5,
    imgUrl: Pepsi,
    description: 'Refrigerante Pepsi 350ML',
    optionType: 'DRINK',
  },
  {
    id: 13,
    name: 'Fanta Uva',
    price: 5,
    imgUrl: FantaUva,
    description: 'Refrigerante Fanta Uva 350ML',
    optionType: 'DRINK',
  },
  {
    id: 14,
    name: 'Fanta Laranja',
    price: 5,
    imgUrl: FantaLaranja,
    description: 'Refrigerante Fanta Laranja 350ML',
    optionType: 'DRINK',
  },
];
