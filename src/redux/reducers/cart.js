const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const ADD_PIZZA_CART = 'ADD_PIZZA_CART';
const CLEAR_CART = 'CLEAR_CART';

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const allArrPizzas = [].concat.apply(
        [],
        Object.values(newItems).map((obj) => obj.items),
      );
      const totalPrice = getTotalPrice(allArrPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allArrPizzas.length,
        totalPrice,
      };
    }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    default:
      return state;
  }
};

export default cart;
