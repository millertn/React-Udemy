import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  recipe;

  constructor(
    private route: ActivatedRoute,
    private service:RecipesService,
    private router: Router,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      } 
      const recipeId = paramMap.get('recipeId');
      this.recipe = this.service.getRecipe(+recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertController.create({
      header:"Are you sure?", 
      message:"Do you really want to delete this recipe?", 
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Yes, Delete',
          handler: () => {
            this.service.deleteRecipe(this.recipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
