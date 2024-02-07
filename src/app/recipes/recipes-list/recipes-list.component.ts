import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css',
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeServcice: RecipesService) {}
  ngOnInit(): void {
    this.recipes = this.recipeServcice.getRecipes();
  }
}
