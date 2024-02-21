import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipeResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './Auth/auth.component';
import { authGuardFn } from './Auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [authGuardFn],
    children: [
      { path: '', component: RecipesStartComponent },
      { path: 'new', component: RecipesEditComponent },
      {
        path: ':id',
        component: RecipesDetailComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':id/edit',
        component: RecipesEditComponent,
        resolve: [RecipeResolverService],
      },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
