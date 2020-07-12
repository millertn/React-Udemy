import { Injectable, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[];
  //   {
  //     id: 1,
  //     title: 'Schnitzel',
  //     imageUrl: 'https://nitrocdn.com/KGfVESPIeXJnuXfxnlyvJdZmxFEDAGNJ/assets/static/optimized/wp-content/uploads/2014/03/e943a4a58b40f293e61888218bf580c0.Schnitzel-1-1.jpg',
  //     ingredients: [
  //       '4 boneless pork steaks or chops', 
  //       'salt and freshly ground black pepper', 
  //       '1/2 cup all-purpose flour combined with 1 teaspoon salt',
  //       '2 large eggs, lightly beaten',
  //       '3/4 cup plain breadcrumbs',
  //       'Oil for frying (neutral)'
  //     ],
  //     directions: [
  //       'Place the pork chops between two sheets of plastic wrap and pound them until just 1/4 inch thick with the flat side of a meat tenderizer. Lightly season both sides with salt and freshly ground black pepper.',
  //       'Place the flour mixture, egg, and breadcrumbs in 3 separate shallow bowls. Dip the chops in the flour, the egg, and the breadcrumbs, coating both sides and all edges at each stage. Be careful not to press the breadcrumbs into the meat. Gently shake off the excess crumbs. Don\'t let the schnitzel sit in the coating or they will not be as crispy once fried - fry immediately.',
  //       'Make sure the cooking oil is hot enough at this point (about 330 degrees F) as you don\'t want the Schnitzel to sit around in the coating before frying. Use enough oil so that the Schnitzels "swim" in it.',
  //       'Fry the Schnitzel for about 2-3 minutes on both sides until a deep golden brown. Transfer briefly to a plate lined with paper towels.',
  //       'Serve immediately with slices of fresh lemon and parsley sprigs or with your choice of sauce. Serve with German Spaetzle (see recipe for Homemade German Spaetzle), French fries, or German potato salad, and with a fresh leafy green salad.'
  //     ],
  //     prepTime:10,
  //     cookTime:6
  //   },
  //   {
  //     id: 2,
  //     title: 'Michelle\'s Cookies',
  //     imageUrl: 'https://nitrocdn.com/pYazsaHOTWIueLckVEtXQdYLdaoHaWlC/assets/static/optimized/wp-content/uploads/2016/01/1a437be9d7e1246fc31c5da740a497a2.best-chocolate-chip-cookies-recipe-ever-no-chilling-1-e1549147195343.jpg',
  //     ingredients: [
  //       '1 cup (2 sticks) softened butter', 
  //       '3/4 cup packed light brown sugar', 
  //       '1 cup granulated sugar', 
  //       '2 large eggs', 
  //       '3 1/2 cups all purpose flour', 
  //       '1 teaspoon salt', 
  //       '1 teaspoon baking soda', 
  //       '2 cups chocolate chps', 
  //     ],
  //     directions: [
  //       'wisk sugars together by hand', 
  //       'wisk in  butter until completley combined', 
  //       'beat in eggs and vamilla', 
  //       'in seperate bowl mix flour, salt, and baking soda. Add to wet ingredients', 
  //       'Mix until thoroughly combined', 
  //       'Add chocolate chips', 
  //       'chill for  10-15 minutes to make dough manageable', 
  //       'partition into handfulls (20  large cookies)', 
  //       'freeze dough (optional)', 
  //       'preheat oven to 350 degrees', 
  //       'bake 15-20 minutes', 
  //     ],
  //     prepTime:60,
  //     cookTime:15
  //   },
  // ];

  constructor(
    // public db: AngularFireDatabase,
    public db: AngularFirestore
  ) { 
    this.recipes = new Array<Recipe>();
    this.db.collection('/recipes').snapshotChanges().subscribe(snapshots => {
      snapshots.map( recipe => {
        let newRecipe = recipe.payload.doc.data() as Recipe;
        this.recipes.push(newRecipe);
      });
    });
  }

  getAllRecipes () {
    return this.recipes;
  }

  getRecipe(recipeId: number) {
    return {...this.recipes.find( recipe => { return recipe.id === recipeId })};
  }

  deleteRecipe(recipeId: number) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

  createRecipe() {

  }
}
