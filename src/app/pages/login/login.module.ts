import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ForbidCnDirective } from './forbid-cn.directive';
import { OpenCloseComponent } from './open-close/open-close.component';


@NgModule({
  declarations: [LoginComponent, ForbidCnDirective, OpenCloseComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
