import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AccountService } from '../account.service';
import { ContextService } from '../context.service';
import { UserService } from '../user.service';
import { WindowService } from '../window.service';

@Injectable({
  providedIn: 'root'
})
export class HeroAuthGuard implements CanActivate {
  constructor(
    private userserve:UserService,
    private router:Router,
    private accountServe:AccountService,
    private contextServe:ContextService,
    private windowServe:WindowService,
    ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      // console.log('state', state)
      const auths:string[] = next.data.auth;
      return this.contextServe.setContext().pipe(
        switchMap(user => {
          if(user) {
            if (auths?.includes(user.role)) {
              return of(true);
            } else {
              // this.router.navigateByUrl('/home/heroes').then(() => {
              //   alert('Please contact admin!')
              // }) ;
              this.router.navigateByUrl('/no-auth').then(() => {
                this.windowServe.alert('Please contact admin!')
              });
              return of(false);
            }
          }
          this.accountServe.redirectTo= state.url;
          // console.log(this.accountServe.redirectTo);
          this.router.navigateByUrl('/login').then(() => {
            this.windowServe.alert('please login first!')
          });
          return of(false);
        })
      )
      // return this.userserve.user$.pipe(
      //   switchMap( (user) => {
      //     if (user) {
      //       if (auths?.includes(user.role)) {
      //         return of(true);
      //       } else {
      //         // this.router.navigateByUrl('/home/heroes').then(() => {
      //         //   alert('Please contact admin!')
      //         // }) ;

      //         this.router.navigateByUrl('/no-auth').then(() => {
      //           this.windowServe.alert('Please contact admin!')
      //         });
      //         return of(false);
      //       }
      //     }
      //     this.accountServe.redirectTo= state.url;
      //     // console.log(this.accountServe.redirectTo);
      //     this.router.navigateByUrl('/login').then(() => {
      //       this.windowServe.alert('please login first!')
      //     });
      //     return of(false);
      // }));
  }
}
