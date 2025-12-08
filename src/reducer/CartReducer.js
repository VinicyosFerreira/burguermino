export const initialState = {
  cart: [],
  total: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      // verificar se o item já existe no carrinho
      const itemIsCart = state.cart.some((item) => {
        return item.id === action.payload.id;
      });

      // caso produto existe no carrinho
      if (itemIsCart) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }

            return item;
          }),
        };
      }

      // caso o produto não exista no carrinho
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case 'REMOVE_CART':
      // Remover produto do carrinho
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };

    case 'INCREMENT_CART':
      // Incrementar o produto em 1 quantidade
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        }),
      };

    case 'DECREMENT_CART':
      // Decrementar o produto em 1 quantidade
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            };
          }

          return item;
        }),
      };

    case 'CALCULATE_TOTAL': {
      // Calcular o total do carrinho
      const total = state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      return {
        ...state,
        total,
      };
    }

    case 'CLEAR_CART':
      // limpar o carrinho
      return {
        ...state,
        cart: [],
        total: 0,
      };
  }
};
