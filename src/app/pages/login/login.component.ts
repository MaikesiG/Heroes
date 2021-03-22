import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthKey } from 'src/app/configs/constant';
import { LoginArg } from 'src/app/configs/type';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  formValues: LoginArg = {
    name: '',
    password: ''
  };

  constructor(
    private router: Router,
    private accountServe:AccountService,
    private userServe:UserService,
    private windowServe:WindowService,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('form', form.value);
    if (form.valid) {
      console.log('valid form', form.value);
      this.accountServe.login(form.value).subscribe(({user,token}) =>{
        // console.log('res',res)

        this.windowServe.setStorage(AuthKey,token);
        this.userServe.setUser(user);
        // console.log('setUser',user)
        this.windowServe.alert('login successfully');
        const to = this.accountServe.redirectTo || '/home/heroes'
        console.log('to', to)
        this.router.navigateByUrl(to).then(() =>{
          this.accountServe.redirectTo = '';
        });
      })

    }
  }
}
