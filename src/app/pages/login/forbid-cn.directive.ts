import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appForbidCn]',
  providers:[{provide:NG_VALIDATORS,useExisting:ForbidCnDirective,multi:true}]
})
export class ForbidCnDirective implements Validator {
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return /\p{Unified_Ideograph}/u.test(control.value) ? { forbidCn: '密码不支持中文' } : null;
  }
}
