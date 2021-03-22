import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { WindowService } from '../window.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  constructor(
    private userserve:UserService,
    private router:Router,
    private windowServe:WindowService,
    ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.userserve.user$.pipe(
      switchMap( (user) => {
      if(user) {
        this.router.navigateByUrl('/home/heroes').then(()=>{
          this.windowServe.alert('You have already login!')
        });
        return of(false);
      }
      return of(true);
    }));
  }

}
