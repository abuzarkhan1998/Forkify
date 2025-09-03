export const state = {
    recipe : {}
}

export const loadRecipe = async function(recipeId){
    try {
    if(!recipeId) return;
    const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
        );
        // const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
        const data = await res.json();
        console.log(data);
        const { recipe :recipeResponse } = data?.data;
        console.log(recipeResponse);
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
        alert(err);
    }
}