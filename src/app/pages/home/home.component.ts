import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Hero } from 'src/app/configs/type';
import { UserService } from 'src/app/services/user.service';

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

}
