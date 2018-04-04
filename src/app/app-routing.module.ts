import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core//home/home.component';

const appRoutes: Routes = [
    // {path:  '', redirectTo: '/recipes', pathMatch: 'full'},
    {path:  '', component: HomeComponent},
    {path:  'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    { path: 'shopping-list', component: ShoppingListComponent}
    // { path: 'not-found', component: PageNotFoundComponent },
    // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'} },
    // { path: '**', redirectTo: '/not-found' }
  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
      ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
