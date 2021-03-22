import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent
} from './pages/home/home.component';
import { NoAuthComponent } from './pages/no-auth/no-auth.component';


const routes: Routes = [
  {path:'login',loadChildren:()=> import('./pages/login/login.module').then(m=>m.LoginModule)},
  {path:'no—auth',component:NoAuthComponent, data:{title:'no auth'}},
  {path:'',redirectTo:'/home/heroes',pathMatch:'full'},
  {path:'**',redirectTo:'/home/heroes',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
