import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddHeroRoutingModule } from './add-hero-routing.module';
// import { AddHeroComponent } from './add-hero.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // AddHeroComponent
  ],
  imports: [
    CommonModule,
    AddHeroRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ]
})
export class AddHeroModule { }
