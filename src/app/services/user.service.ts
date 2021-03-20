import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Hero } from '../configs/type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private sub = new BehaviorSubject<Hero>(null);
  readonly user$ = this.sub.asObservable();
  // private sub = new Subject<Hero>();
  constructor() { }
  setUser(user:Hero) {
    this.sub.next(user);
  }
  // getUser():Observable<Hero> {
  //   return this.sub.asObservable();
  // }
  clearUser(): void {
    this.sub.next(null);
    // this.sub.complete()
  }
}
