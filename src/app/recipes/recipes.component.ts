import { Component } from "@angular/core";
import { Recipe } from "../models/recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html"
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  teste = true;

  recipeSelected = $event => {
    this.selectedRecipe = $event;
  };
}
