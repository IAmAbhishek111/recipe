import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  loadedFeauture = 'recipe'
  
  navbarCollapsed = true;

  onNavigate(feauture: string){

    this.loadedFeauture = feauture;
  }
}
