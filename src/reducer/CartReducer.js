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
  }
};
