import axios from 'axios';
import { LOADING_FILMS, ALERT_FILMS, ADD_NEW_FILM, GET_ALL_FILMS, GET_ONE_FILM, DELETE_FILM } from './types';

const config = {
  headers: {
    'Content-type': 'application/json',
  },
};

/**
 * @description Add new film
 * @param {object} body - title, release, format and stars
 * @return added film
 */
export const addNewFilm = (body) => async (dispatch) => {
  try {
    const response = await axios.put('http://localhost:5000/api/films', body, config);

    dispatch({
      type: ADD_NEW_FILM,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ALERT_FILMS,
      payload: err.message,
    });
  }
};

/**
 * @description Get all films
 * @return list of all films
 */
export const getAllFilms = () => async (dispatch) => {
  dispatch({
    type: LOADING_FILMS,
  });
  try {
    const response = await axios.get('http://localhost:5000/api/films', config);
    dispatch({
      type: GET_ALL_FILMS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ALERT_FILMS,
      payload: err.message,
    });
  }
};

/**
 * @description Get one film by id
 * @param {string} id - id of film
 * @return one film by id
 */
export const getFilmById = (id) => async (dispatch) => {
  dispatch({
    type: LOADING_FILMS,
  });
  try {
    const response = await axios.get(`http://localhost:5000/api/films/${id}`, config);
    dispatch({
      type: GET_ONE_FILM,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ALERT_FILMS,
      payload: err.message,
    });
  }
};

/**
 * @description Delete film by id
 * @param {string} id - id of film
 */
export const deleteFilm = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/films?id=${id}`, config);
    dispatch({
      type: DELETE_FILM,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: ALERT_FILMS,
      payload: err.message,
    });
  }
};
