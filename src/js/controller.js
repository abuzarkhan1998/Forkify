const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const showRecipe = async function(){
try{
  // const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
  const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
  const data = await res.json();
  let {recipe} = data?.data;
  recipe = {
    id: recipe.id,
    ingredients: recipe.ingredients,
    title: recipe.title,
    publisher: recipe.publisher,
    ingredients: recipe.ingredients,
    image: recipe.image_url,
    source: recipe.source_url
  };
  console.log(recipe);
  console.log('Hello');
}
catch(err){
  alert(err);
}
};

showRecipe();
