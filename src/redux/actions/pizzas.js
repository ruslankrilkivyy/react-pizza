import axios from 'axios';

const SET_PIZZAS = 'SET_PIZZAS';
const SET_LOADED = 'SET_LOADED';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const getPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});
