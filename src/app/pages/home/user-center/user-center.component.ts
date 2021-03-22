import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/configs/type';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCenterComponent implements OnInit {
  user$:Observable<Hero>;
  constructor(
    private userserve:UserService,
    ) {
      this.user$ = this.userserve.user$
    }

  ngOnInit(): void {

  }

}
