import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroAuthGuard } from 'src/app/services/guards/hero-auth.guard';
import { HeroCanDeactivateGuard } from 'src/app/services/guards/hero-can-deactivate.guard';
import { AddUpdateHeroComponent } from '../add-update-hero/add-update-hero.component';
// import { AddHeroComponent } from './add-hero.component';


const routes: Routes = [
  {
    path:'',
    // component:AddHeroComponent,
    component:AddUpdateHeroComponent,
    canDeactivate:[HeroCanDeactivateGuard],
    canActivate:[HeroAuthGuard],
    data:{
      title:'Add Hero',
      breadcrumb:['Home','Add Hero'],
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddHeroRoutingModule { }
