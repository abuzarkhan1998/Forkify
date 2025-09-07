import { API_URL } from "./config.js";
import {returnJson} from "./helper.js"

export const state = {
    recipe : {}
}

export const loadRecipe = async function(recipeId){
    try {
    if(!recipeId) return;
    const data = await returnJson(`${API_URL}/${recipeId}`);
        const { recipe :recipeResponse } = data?.data;
        // console.log(recipeResponse);
        state.recipe = {
          id: recipeResponse.id,
          ingredients: recipeResponse.ingredients,
          title: recipeResponse.title,
          publisher: recipeResponse.publisher,
          ingredients: recipeResponse.ingredients,
          image: recipeResponse.image_url,
          source: recipeResponse.source_url,
          cookingTime: recipeResponse.cooking_time,
          servings: recipeResponse.servings,
        };
    }
    catch (err){
       console.error(`${err} 💥💥💥💥`);
    }
}