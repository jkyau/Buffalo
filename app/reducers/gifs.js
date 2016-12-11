import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedGifs = createReducer({}, {
  [types.SET_SEARCHED_GIFS](state, action) {
    console.log(action);
    let result = action.gifs.items.splice(0,10);
    let newState = {};
    result.forEach((gif, index) => {
      newState[gif.id] = gif;
    });
    return newState;
  }
});

export const images = createReducer({}, {
  [types.FETCH_IMAGE_SUCCESS](state, action) {
    console.log(action);
    let newState = {};
    const prevItem = state[action.image.id];
    const nextItem = action.image;

    if(!prevItem) {
      return {...state, [action.image.id]: nextItem};
    }

    return newState;
  }
});
