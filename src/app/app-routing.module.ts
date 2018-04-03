import { NgModule, Component } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SingnupComponent } from './auth/singnup/singnup.component';
import { SingninComponent } from './auth/singnin/singnin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    {path:  '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent, children: [
       { path: '', component: RecipeStartComponent },
       { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
       { path: ':id', component: RecipeDetailComponent },
       { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: 'signup', component: SingnupComponent},
    { path: 'signin', component: SingninComponent},
    // { path: 'not-found', component: PageNotFoundComponent },
    // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'} },
    // { path: '**', redirectTo: '/not-found' }
  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
      ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
