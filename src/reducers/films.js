import { ADD_NEW_FILM, ALERT_FILMS, GET_ALL_FILMS, LOADING_FILMS, GET_ONE_FILM, DELETE_FILM } from '../actions/types';

const initialState = {
  isLoading: false,
  alert: '',
  allFilms: null,
  currentFilm: null,
};

const films = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALERT_FILMS:
      return {
        ...state,
        alert: payload,
      };
    case LOADING_FILMS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_FILMS:
      return {
        ...state,
        allFilms: payload,
        isLoading: false,
      };
    case ADD_NEW_FILM:
      return {
        ...state,
        allFilms: [state.allFilms && [...state.allFilms, payload]],
      };
    case GET_ONE_FILM:
      return {
        ...state,
        currentFilm: payload,
        isLoading: false,
      };
    case DELETE_FILM:
      return {
        ...state,
        allFilms: [...state.allFilms.filter((film) => film._id !== payload)],
      };
    default:
      return state;
  }
};

export default films;
