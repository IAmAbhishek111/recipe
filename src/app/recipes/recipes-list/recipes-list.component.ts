import { Component , OnInit, importProvidersFrom } from '@angular/core';

import {Recipe} from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[]=  [
    new Recipe('A test Recipe','This is simply a test recipe',
    'https://c.ndtvimg.com/55q0fj1_snacks-650_625x300_14_August_18.jpg')
    
  ];

  constructor(){}
  ngOnInit(): void {
    
  }

}
