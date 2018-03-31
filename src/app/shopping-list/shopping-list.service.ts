import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientChanged: EventEmitter<Ingredient[]> = new EventEmitter();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.getIngredients().slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // this.ingredients = this.ingredients.concat(ingredients);
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.getIngredients().slice());
    }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }
}
