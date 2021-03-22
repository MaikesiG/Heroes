import { Injectable } from '@angular/core';
// import Heros from '../configs/hero'
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Base, Hero, HeroArg, UpdateHeroArg } from '../configs/type';
import { stringify } from 'qs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private prefix = environment.baseUrl + '/hero/';
  constructor(private http:HttpClient) { }
  heroes(args:HeroArg): Observable<Hero[]> {
    // const params = new HttpParams()
    // .set('name',args.name)
    // .set('jobs',args.job)
    // .set('sort',args.sort)
    const params = new HttpParams({fromString: stringify(args)})
    return this.http.get(this.prefix+'list', { params })
    .pipe(map((res:Base<Hero[]>)=> res.data),
    // catchError(error => this.handleError(error))
    )
  }
  addHeroes(args:UpdateHeroArg): Observable<Base<void>> {
    // const params = new HttpParams()
    // .set('name',args.name)
    // .set('jobs',args.job)
    // .set('sort',args.sort)
    return this.http.post(this.prefix+'add', args)
    .pipe(map((res:Base<void>)=> res),
    // catchError(error => this.handleError(error))
    )
  }
  // private handleError(error:HttpErrorResponse): Observable<never> {
  //   console.log('error',error)
  //   if(typeof error.error?.code === 'number') {
  //     //后台拒绝请求
  //     alert(error.error.message);
  //   } else {
  //     alert('请求失败')
  //   }
  //   return throwError(error);
  // }
}
