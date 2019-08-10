import { Component, OnInit } from "@angular/core";
import { Ingredient } from "src/app/models/ingredient.model";
import { ShoppingListService } from "src/app/directives/shoppling-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shopListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shopListService.getAllIngredients();
  }

  onNewIngredient = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
  };
}
