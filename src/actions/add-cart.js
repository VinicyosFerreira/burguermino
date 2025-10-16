const ADD_CART = (dispatch, optionType) => {
  dispatch({
    type: 'ADD_CART',
    payload: optionType,
  });
};

export default ADD_CART;
