import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnInit
} from "@angular/core";
import { Ingredient } from "src/app/models/ingredient.model";
import { ShoppingListService } from "src/app/directives/shoppling-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html"
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {}

  onAddClick = () => {
    const ingredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.newIngredientCallback.emit(ingredient);
  };

  onDeleteClick = () => {};

  onClearClick = () => {};
}
