import { Component } from '@angular/core';
import { ActivatedRoute,  NavigationStart, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthKey } from './configs/constant';
import { AccountService } from './services/account.service';
import { ContextService } from './services/context.service';
import { UserService } from './services/user.service';
import { WindowService } from './services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Heroes';
  constructor(
    private router:Router,
    // private route:ActivatedRoute,
    // private userServe:UserService,
    // private accountServe:AccountService,
    private contextServe:ContextService,
    // private windowServe:WindowService,
    ) {
    this.router.events.pipe(
      filter(event=> event instanceof NavigationStart),//这里只需要这个时机
      // switchMap(()=>this.userServe.user$),//所以这里为空
      // switchMap( user => {
      //   const authKey = this.windowServe.getStorage(AuthKey);
      //   if(authKey && !user) {
      //     return this.accountServe.account(authKey)
      //   }
      //   return EMPTY;
      // })
      switchMap(() => this.contextServe.setContext())
    ).subscribe(res =>{
      console.log('res', res)
    }
      // ({user,token})=>{
      // this.windowServe.setStorage(AuthKey,token);
      // this.userServe.setUser(user);
      // }
    )
    // .subscribe(currentUser=> {
    //   const authKey = localStorage.getItem(AuthKey);
    //   if(authKey && !currentUser) {
    //     this.accountServe.account(authKey).subscribe(({user,token}) => {
    //       localStorage.setItem(AuthKey,token);
    //       this.userServe.setUser(user);
    //       // console.log('setUser',user)
    //       // alert('login successfully');
    //       this.router.navigateByUrl('/home/heroes');
    //     })
    //   }
    //   // data
    //   //([data,user])
    //   // console.log('res', res)
    //   // console.log('this.router.firstChild', this.route.firstChild.data);
    //   // console.log('navagationStart',currentUser)
    // });
  }

}
