import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe} from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css'
})
export class RecipesItemComponent implements OnInit {

 @Input() recipe: Recipe ;
  @Output() recipeSelected = new EventEmitter<void>();


  constructor(){}

  ngOnInit(): void {
    
  }
  onSelected(){
    this.recipeSelected.emit();
    

  }
}
