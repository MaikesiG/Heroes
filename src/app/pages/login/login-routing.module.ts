import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthGuard } from 'src/app/services/guards/login-auth.guard';
import { LoginComponent } from './login.component';


const routes: Routes = [{
  path:'',
  component:LoginComponent,
  canActivate:[LoginAuthGuard],
  data:{title:'login'}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
