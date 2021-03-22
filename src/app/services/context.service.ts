import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthKey } from '../configs/constant';
import { Hero } from '../configs/type';
import { AccountService } from './account.service';
import { UserService } from './user.service';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(
    private userServe:UserService,
    private accountServe:AccountService,
    private windowServe:WindowService,
  ) { }

  setContext (): Observable<Hero| false> {
    const authKey = this.windowServe.getStorage(AuthKey);
    return new Observable(observer =>{
      if (authKey) {
        this.userServe.user$.pipe(
          switchMap(user => {
            if(user) {
              return of(user)
            } else {
              return this.accountServe.account(authKey);
            }
          })
        ).subscribe(res => {
          let user: Hero;
          if('token' in res) {
            this.windowServe.setStorage(AuthKey, res.token);
            this.userServe.setUser(res.user);
            user= res.user;
          } else {
            user= res
          }
          observer.next(user)
        })
      } else {
        observer.next(false)
      }
      observer.complete();
    });
  }
}
