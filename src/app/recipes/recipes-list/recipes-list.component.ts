import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css',
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeServcice: RecipesService , private router : Router , 
    private route : ActivatedRoute) {}
  ngOnInit(): void {
    this.recipes = this.recipeServcice.getRecipes();
  }

  onNewRecipe()
  {
this.router.navigate(['new'] , {relativeTo: this.route});

  }
}
