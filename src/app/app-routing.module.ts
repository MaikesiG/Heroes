import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent
} from './pages/home/home.component';


const routes: Routes = [
  {path:'login',loadChildren:()=> import('./pages/login/login.module').then(m=>m.LoginModule)},
  {path:'',redirectTo:'/home/heroes',pathMatch:'full'},
  {path:'**',redirectTo:'/home/heroes',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
