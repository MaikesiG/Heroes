import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonInterceptorService } from "./common-interceptor.service";
import { CommonInterceptorTwoService } from "./common-interceptor2.service";

export default [
  { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptorTwoService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptorService, multi: true },
]
