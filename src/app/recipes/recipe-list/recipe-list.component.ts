import { Component, OnInit } from "@angular/core";
import { Recipe } from "../../models/recipe.model";
import { RecipesService } from "src/app/directives/recipes.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html"
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe;
  private recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    this.recipesService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
