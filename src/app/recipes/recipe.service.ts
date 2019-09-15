import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Chicken Curry',
      'A special chicken curry',
      // tslint:disable-next-line: max-line-length
      'https://thumbs.dreamstime.com/b/butter-chicken-curry-27409035.jpg',
      [new Ingredient('Chicken', 2), new Ingredient('bread', 3)]),
    new Recipe(
      'Cheese Burger',
      'All heavy cheese burger',
      // tslint:disable-next-line: max-line-length
      'https://icon2.kisspng.com/20180711/rj/kisspng-mcdonald-s-cheeseburger-hamburger-mcdonald-s-big-m-mcdonald-hamburger-5b4675b836b1c3.629646031531344312224.jpg',
      [new Ingredient('Cheese', 2), new Ingredient('buns', 2)])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
