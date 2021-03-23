import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonInterceptorService } from './services/interceptors/common-interceptor.service';
import interceptors from './services/interceptors/index';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PagesModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [...interceptors], //拦截器是数组
  bootstrap: [AppComponent]
})
export class AppModule { }
