import { Component, Input } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";
import { RecipesService } from "src/app/directives/recipes.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html"
})
export class RecipeItemComponent {
  @Input() item: Recipe;

  constructor(private recipesService: RecipesService) {}

  onItemSelect = () => {
    this.recipesService.recipeSelected.emit(this.item);
  };
}
