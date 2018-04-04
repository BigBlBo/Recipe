import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingnupComponent } from './singnup/singnup.component';
import { SingninComponent } from './singnin/singnin.component';

const authRoutes: Routes = [
    { path: 'signup', component: SingnupComponent},
    { path: 'signin', component: SingninComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingmodule { }
