const initialState = {
  items: [],
  isLoaded: false,
};

const SET_PIZZAS = 'SET_PIZZAS';

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default pizzas;
