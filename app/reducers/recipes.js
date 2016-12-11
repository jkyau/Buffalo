import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({}, {
  [types.SET_SEARCHED_RECIPES](state, action) {
    console.log(action.recipes);
    let newState = {};
    action.recipes.forEach((recipe, index) => {
      newState[index] = recipe;
    });
    return newState;
  }
});

export const recipeCount = createReducer(0, {
  [types.SET_SEARCHED_RECIPES](state, action) {
    return action.recipes.length;
  }
})
