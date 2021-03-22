import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthKey } from 'src/app/configs/constant';

interface customHttpConfig {
  headers?:HttpHeaders;
}
@Injectable()
export class CommonInterceptorTwoService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('CommonInterceptorService2')
    return next.handle(req)
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
