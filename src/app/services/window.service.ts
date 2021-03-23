import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { windowWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private isBrowser:boolean;
  constructor(@Inject(PLATFORM_ID) private platform_id:object) {
    this.isBrowser = isPlatformBrowser(this.platform_id);
    // isPlatformServer()
    console.log('this.isBrowser', this.isBrowser)
   }
  confirm(message: string): boolean {
    if (this.isBrowser) {
      return window.confirm(message);
    }
    return false;
  }

  setStorage(key: string, value: string): void {
    if (this.isBrowser) {
      localStorage.setItem(key, value);
    }
  }
  getStorage(key: string): string | null {
    if (this.isBrowser) {
      return localStorage.getItem(key);
    }
  }
  removeStorage(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  alert(message:string):void {
    if(this.isBrowser) {
      alert(message)
    }
  }
  confirm(message:string):boolean {
    if(this.isBrowser) {
      return window.confirm(message)
    }
    return false;
  }
  clearStorage(): void {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }
}
