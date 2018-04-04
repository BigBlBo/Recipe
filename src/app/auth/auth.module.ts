import { NgModule } from '@angular/core';

import { SingnupComponent } from './singnup/singnup.component';
import { SingninComponent } from './singnin/singnin.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingmodule } from './auth-routing.module';

@NgModule({
  imports: [
    FormsModule,
    AuthRoutingmodule
  ],
  declarations: [
    SingnupComponent,
    SingninComponent
  ]
})
export class AuthModule { }
