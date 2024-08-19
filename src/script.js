function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let ingredientInput = document.querySelector("#user-ingredient");
  let apiKey = "cd2bcfo5ae203b19202a5050tb1b3849";
  let context =
    "You are a culinair expert that is passionate about dishes that are easy to make at home and do not require a lot of ingredients. Your mission is to generate a recipe of maximum 5 steps in basic HTML. Make sure to follow the user instructions.  Sign the recipe with `Your AI chef` inside a <strong></strong> element.";
  let prompt = `User instructions: Generate a recipe with this ingredient: ${ingredientInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
