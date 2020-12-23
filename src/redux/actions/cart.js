const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const ADD_PIZZA_CART = 'ADD_PIZZA_CART';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
const MINUS_CART_ITEM = 'MINUS_CART_ITEM';

export const addPizzaCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id,
});

export const minusCartItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id,
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  payload: totalCount,
});

export const setTotalPrice = (totalPrice) => ({
  type: SET_TOTAL_PRICE,
  payload: totalPrice,
});
