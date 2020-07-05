import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.page.html',
  styleUrls: ['./recipe-create.page.scss'],
})
export class RecipeCreatePage implements OnInit {

  constructor(
    private recipes: RecipesService
  ) { }

  ngOnInit() {
  }

  recipeOnCreate() {
    this.recipes.createRecipe();
  }

}
