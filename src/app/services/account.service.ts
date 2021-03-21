import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthKey } from '../configs/constant';
import { Base, LoginArg, LoginType } from '../configs/type';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private prefix = environment.baseUrl + '/hero/';
  constructor(private http:HttpClient) { }
  login(args:LoginArg): Observable<LoginType> {
    // const params = new HttpParams()
    // .set('name',args.name)
    // .set('jobs',args.job)
    // .set('sort',args.sort)
    // const params = new HttpParams({fromString: stringify(args)})
    return this.http.post(this.prefix+'login',args)
    .pipe(map((res:Base<LoginType>)=> res.data),
    // catchError(error => this.handleError(error))
    )
  }

  private handleError(error:HttpErrorResponse): Observable<never> {
    console.log('error',error)
    if(typeof error.error?.code === 'number') {
      //后台拒绝请求
      alert(error.error.message);
    } else {
      alert('请求失败')
    }
    return throwError(error);
  }
  account(auth:string): Observable<LoginType> {
    // const params = new HttpParams()
    // .set('name',args.name)
    // .set('jobs',args.job)
    // .set('sort',args.sort)
    // const params = new HttpParams({fromString: stringify(args)})
    return this.http.get(this.prefix+'account'
    // , {
    //   headers:new HttpHeaders({[AuthKey]:auth,})
    // }
    )
    .pipe(map((res:Base<LoginType>)=> res.data),
    // catchError(error => this.handleError(error))
    )
  }
}
