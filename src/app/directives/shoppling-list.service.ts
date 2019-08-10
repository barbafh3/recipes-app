import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

@Injectable({ providedIn: "root" })
export class ShoppingListService {
  newIngredient = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient("Carrot", 2),
    new Ingredient("Chicken", 1),
    new Ingredient("Sugar", 1)
  ];

  getAllIngredients = () => {
    return this.ingredients.slice();
  };

  addIngredient = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.newIngredient.emit(ingredient);
  };
}
