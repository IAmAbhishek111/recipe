import { Component , EventEmitter, OnInit, Output, importProvidersFrom } from '@angular/core';

import {Recipe} from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe> ();


  recipes: Recipe[]=  [
    new Recipe('A test Recipe','This is simply a test recipe',
    'https://c.ndtvimg.com/55q0fj1_snacks-650_625x300_14_August_18.jpg') ,
    new Recipe('Another test Recipe','This is simply a test recipe',
    'https://c.ndtvimg.com/55q0fj1_snacks-650_625x300_14_August_18.jpg')
    
  ];

  constructor(){}
  ngOnInit(): void {
    
  }
  onRecipeSelected(recipe : Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }
}
