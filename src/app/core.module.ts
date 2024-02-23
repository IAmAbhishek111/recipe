import { NgModule } from '@angular/core';
import { ShoppingListService } from './shopping-list/shoppingList.service';
import { RecipesService } from './recipes/recipes.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './Auth/auth-inteceptor.service';
import { LoggingService } from './logging.service';
@NgModule({
  providers: [
    ShoppingListService,
    RecipesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    
  ],
})
export class CoreModule {}
