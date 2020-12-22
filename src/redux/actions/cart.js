const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const ADD_PIZZA_CART = 'ADD_PIZZA_CART';

export const addPizzaCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  payload: totalCount,
});

export const setTotalPrice = (totalPrice) => ({
  type: SET_TOTAL_PRICE,
  payload: totalPrice,
});
