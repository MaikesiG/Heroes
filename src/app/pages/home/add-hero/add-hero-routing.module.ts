import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroCanDeactivateGuard } from 'src/app/services/guards/hero-can-deactivate.guard';
import { AddHeroComponent } from './add-hero.component';


const routes: Routes = [
  {
    path:'',
    component:AddHeroComponent,
    canDeactivate:[HeroCanDeactivateGuard],
    data:{title:'Add Hero',
    breadcrumb:['Home','Add Hero'],
  }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddHeroRoutingModule { }
