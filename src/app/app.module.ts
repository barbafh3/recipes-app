import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingEditComponent } from "./shopping/shopping-edit/shopping-edit.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingComponent } from "./shopping/shopping.component";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipes/recipe-item/recipe-item.component";
import { DropdownDirective } from "./directives/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    ShoppingComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    HeaderComponent,
    ShoppingComponent,
    DropdownDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
