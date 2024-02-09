import { Component,  OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { R3InputMetadata } from '@angular/compiler';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.css',
})
export class RecipesDetailComponent implements OnInit {
 recipe: Recipe;
 id : number;


  constructor(private recipeService: RecipesService , private route: ActivatedRoute , 
    private router : Router) {}

  ngOnInit() {
    this.route.params.subscribe(

      (params : Params) =>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe()
  {
    this.router.navigate(['edit'] , {relativeTo : this.route});


    // this.router.navigate(['../' , this.id , 'edit'] , {relativeTo : this.route});

  
  }
}
