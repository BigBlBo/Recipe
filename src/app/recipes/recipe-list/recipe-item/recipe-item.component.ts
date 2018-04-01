import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // recipe: Recipe;
  // @Output() recipeSelected: EventEmitter<void> = new EventEmitter();

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSelected() {

  }
}
