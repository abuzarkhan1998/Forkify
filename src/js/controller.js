import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as recipeModel from './model.js';
import recipeView from './views/recipeView.js'

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const recipeId = window.location.hash.slice(1);   
     if(!recipeId) return;  
    recipeView.renderSpinnder();
    await recipeModel.loadRecipe(recipeId);
    // console.log(recipeModel.state);
    recipeView.renderView(recipeModel.state.recipe);
    // console.log('Hello');
  } catch (err) {
    console.error(err);
  }
};


// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);

const init = function(){
  recipeView.addHandlerRender(showRecipe);
}

init();

