import { Recipe } from './recipe.model';
import { Output, EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simple a test',
          'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',
          [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
          ]),
          new Recipe('A test recipe', 'This is simple a test tralalal',
          'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',
          [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
          ])
    ];

    recipeSelected: EventEmitter<Recipe> = new EventEmitter();

    constructor(private slService: ShoppingListService) {

    }
    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    addToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}
