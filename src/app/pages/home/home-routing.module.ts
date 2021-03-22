import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
    data:{title:'Home'},
    children:[
      {
        path:'heroes',
        component:HeroesComponent,
        data:{title:'HeoresList',breadcrumb:['Page','HeoresList']}
      },
      {
        path:'add-hero',
        loadChildren:()=> import('./add-hero/add-hero.module')
        .then(m=>m.AddHeroModule),
        data:{
          title:'Add Hero',
          auth:['admin'],
          breadcrumb:['Home','Add Hero']
        }
      },
      {
        path:'update-hero',
        loadChildren:()=> import('./update-hero/update-hero.module')
        .then(m=>m.UpdateHeroModule),
        data:{
          title:'Update Hero',
          auth:['admin'],
          breadcrumb:['Home','Update Hero']
        }
      },
      {path:'',redirectTo:'heroes',pathMatch:'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
