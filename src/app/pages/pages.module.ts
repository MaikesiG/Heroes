import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { NoAuthComponent } from './no-auth/no-auth.component';



@NgModule({
  declarations: [NoAuthComponent],
  imports: [
    HomeModule,
    // LoginModule
  ]
})
export class PagesModule { }
