import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from './../../core/auth.service';
import { routerTransition } from '../../shared/animations/router.animation';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']/* ,
  animations: [routerTransition()] */
})
export class AccountComponent implements OnInit {
  /* @HostBinding('@routerTransition') routerTransition; */

  constructor(public auth: AuthService) {
    console.log(auth);
  }

  ngOnInit() {
  }

}
