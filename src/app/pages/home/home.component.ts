import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthKey } from 'src/app/configs/constant';
import { Hero } from 'src/app/configs/type';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breadcurmb: string[] = [];
  currentUser: Hero;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userServe:UserService,
    private accountServe:AccountService,
    private windowServe:WindowService,
    @Inject(DOCUMENT) private doc:Document,
    private cdr: ChangeDetectorRef,
    ) {
    this.router.events.pipe(
      filter(event=> event instanceof NavigationEnd),//这里只需要这个时机
      switchMap(()=>
      // {
        // return combineLatest(
          this.route.firstChild.data,
          // this.userServe.user$
        // );
        // return this.route.firstChild.data;
      // }
      ),//所以这里为空
    ).subscribe(data => {
      //([data,user])
      // console.log('res', res)
      // console.log('this.router.firstChild', this.route.firstChild.data);
      if(data.breadcrumb?.length) {
         this.breadcurmb = data.breadcrumb;
      }

    })
  }

  ngOnInit(): void {
    this.userServe.user$.subscribe(user =>{
      this.currentUser = user
      this.cdr.markForCheck()
    })
  }
  exitLog() {
    this.accountServe.logout().subscribe(() => {
      this.windowServe.removeStorage(AuthKey);
      this.userServe.clearUser();
      this.router.navigateByUrl('/login').then(() => {
        this.windowServe.alert('logout')
      })
    })
  }

}
