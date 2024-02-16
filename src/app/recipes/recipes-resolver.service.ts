import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Recipe } from './recipes.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable, elementAt } from 'rxjs';
import { RecipesService } from './recipes.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageservice: DataStorageService,
    private recipeService: RecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageservice.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
