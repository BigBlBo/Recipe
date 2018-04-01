import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientChanged: Subject<Ingredient[]> = new Subject();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.getIngredients().slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // this.ingredients = this.ingredients.concat(ingredients);
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.getIngredients().slice());
    }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }
}
