import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple a test',
      'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg'),
      new Recipe('A test recipe', 'This is simple a test tralalal',
      'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')
  ];
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
