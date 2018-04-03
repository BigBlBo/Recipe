import { Recipe } from './recipe.model';
import { Output, EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
      recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(1, 'A test recipe', 'This is simple a test',
          'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',
          [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
          ]),
          new Recipe(2, 'A test recipe', 'This is simple a test tralalal',
          'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',
          [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
          ])
    ];

    constructor(private slService: ShoppingListService) {

    }
    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
  }

    getMaxId(): number {
      let maxId = 0;
            for (const recipe of this.recipes) {
                  if (recipe.id > maxId) {
                        maxId = recipe.id;
                  }
            }
            return maxId + 1;
  }

    getRecipe(id: number): Recipe {
      for (const recipe of this.recipes) {
            if (recipe.id === id) {
                  return recipe;
            }
      }

      return undefined;
  }

    addToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
            this.recipes.push(recipe);
            this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(id: number, recipeNew: Recipe) {
            let index = 0;
            for (const recipeOld of this.recipes) {
                  if (recipeOld.id === id) {
                        this.recipes[index] = recipeNew;
                        break;
                  }
                  index++;
            }
      }

      deleteRecipe(id: number) {
            let index = 0;
            for (const recipeOld of this.recipes) {
                  if (recipeOld.id === id) {
                        this.recipes.splice(index, 1);
                        break;
                  }
                  index++;
            }
            this.recipesChanged.next(this.recipes.slice());
      }
}
