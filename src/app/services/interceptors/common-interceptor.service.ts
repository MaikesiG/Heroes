import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthKey } from 'src/app/configs/constant';

interface customHttpConfig {
  headers?:HttpHeaders;
}
@Injectable()
export class CommonInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('CommonInterceptorService')
    const auth = localStorage.getItem(AuthKey);
    let httpConfig: customHttpConfig = {};
    if (auth) {
      httpConfig = { headers: req.headers.set(AuthKey,auth)}
    }

    const copyReq = req.clone(
      httpConfig
    );
    return next.handle(copyReq).pipe(catchError(error =>
      this.handleError(error)
    ));
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
}
