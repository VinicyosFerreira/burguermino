import { toast } from 'sonner';

export const ADD_CART = (dispatch, optionType) => {
  dispatch({
    type: 'ADD_CART',
    payload: optionType,
  });
  dispatch({
    type: 'CALCULATE_TOTAL',
    payload: optionType,
  });

  toast.success(`${optionType.name} adicionado ao carrinho`);
};

export const REMOVE_CART = (dispatch, optionType) => {
  dispatch({
    type: 'REMOVE_CART',
    payload: optionType,
  });
  dispatch({
    type: 'CALCULATE_TOTAL',
    payload: optionType,
  });
  toast.success(`${optionType.name} removido do carrinho`);
};

export const INCREMENT_CART = (dispatch, optionType) => {
  dispatch({
    type: 'INCREMENT_CART',
    payload: optionType,
  });
  dispatch({
    type: 'CALCULATE_TOTAL',
    payload: optionType,
  });
};

export const DECREMENT_CART = (dispatch, optionType) => {
  dispatch({
    type: 'DECREMENT_CART',
    payload: optionType,
  });

  if (optionType.quantity === 1) {
    dispatch({
      type: 'REMOVE_CART',
      payload: optionType,
    });
  }

  dispatch({
    type: 'CALCULATE_TOTAL',
    payload: optionType,
  });
};

export const CLEAR_CART = (dispatch) => {
  dispatch({
    type: 'CLEAR_CART',
  });
  toast.success('Carrinho limpo');
};
