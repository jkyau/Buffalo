import * as types from './types'
import Api from '../lib/api'

export function fetchGifs(input) {
  return (dispatch, getState) => {
    const params = [
    ].join('&')
    return Api.get(`/gallery/t/cats/viral/1`).then(resp => {
      dispatch(setSearchedGifs({gifs: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function fetchImage(id) {
  return (dispatch, getState) => {
    return Api.get(`/image/${id}`).then(resp => {
      dispatch(fetchImageSuccess({image: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function fetchImageSuccess({image}) {
  return {
    type: types.FETCH_IMAGE_SUCCESS,
    image,
  }
}


export function setSearchedGifs({ gifs }) {
  return {
    type: types.SET_SEARCHED_GIFS,
    gifs,
  }
}
