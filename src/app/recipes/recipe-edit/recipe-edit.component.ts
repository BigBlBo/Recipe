import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,  Validators.required),
        'amount': new FormControl(null, [Validators.required])
      })
    );
  }

  onSubmit() {
    if (this.editMode) {
      const newRecipe = new Recipe(this.id,
        this.recipeForm.value['name'],  this.recipeForm.value['description'],  this.recipeForm.value['imagePath'],
        this.recipeForm.value['ingredients']);
console.log(newRecipe);
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      const newRecipe = new Recipe(this.recipeService.getMaxId(),
        this.recipeForm.value['name'],  this.recipeForm.value['description'],  this.recipeForm.value['imagePath'],
        this.recipeForm.value['ingredients']);

        this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    console.log(index);
    console.log(this.recipeForm.value['ingredients']);
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
