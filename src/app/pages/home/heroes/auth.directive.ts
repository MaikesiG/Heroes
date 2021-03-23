import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective implements OnChanges{
  private hasView = false;
  @Input('appAuth') auths : string[] = [];
  constructor(
    private templateRef: TemplateRef<any>, // 2
    private viewContainer:ViewContainerRef,
    private userServe:UserService,  //2

    ) {
    console.log('appAuth') //1
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    if(this.auths.length) {
      this.userServe.user$.subscribe( user => {
        if(this.auths.includes(user?.role)){
         this.createView()
        } else {
          if(this.hasView) {
            this.viewContainer.clear()
             this.hasView = false;
          }
        }
      })
    } else {
      this.createView()
    }
  }

  createView() {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.hasView = true;
  }

}
