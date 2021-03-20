import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breadcurmb: string[] = [];
  constructor(private route:ActivatedRoute,private router:Router) {
    this.router.events.pipe(
      filter(event=> event instanceof NavigationEnd),//这里只需要这个时机
      switchMap(()=>this.route.firstChild.data),//所以这里为空
    ).subscribe(res=> {
      // console.log('res', res)
      // console.log('this.router.firstChild', this.route.firstChild.data);
      if(res.breadcrumb?.length) {
         this.breadcurmb = res.breadcrumb;
      }
    })
  }

  ngOnInit(): void {
  }

}
