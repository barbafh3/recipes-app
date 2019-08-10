import { Recipe } from "../models/recipe.model";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({ providedIn: "root" })
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Cake",
      "Simple cake",
      "https://www.irishtimes.com/polopoly_fs/1.3644691.1538139961!/image/image.jpg_gen/derivatives/landscape_620/image.jpg"
    ),
    new Recipe(
      "Roasted Chicken",
      "Delicious roasted chicken with carrots",
      "https://www.simplyrecipes.com/wp-content/uploads/2007/01/roast-chicken-carrots-sally-horiz-a-1800.jpg"
    )
  ];

  getAllRecipes = () => {
    return this.recipes.slice();
  };

  addRecipe = (recipe: Recipe) => {
    this.recipes.push(recipe);
  };
}
