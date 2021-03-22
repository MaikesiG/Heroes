import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { AddUpdateHeroComponent } from 'src/app/pages/home/add-update-hero/add-update-hero.component';

@Injectable({
  providedIn: 'root'
})
export class HeroCanDeactivateGuard implements CanDeactivate<AddUpdateHeroComponent > {
  canDeactivate(
    component: AddUpdateHeroComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return component.canDeactivate();
  }

}
