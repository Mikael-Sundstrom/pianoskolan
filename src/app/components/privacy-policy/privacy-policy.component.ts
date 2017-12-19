import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../../shared/animations/router.animation';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  animations: [routerTransition()]
})
export class PrivacyPolicyComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition;

  constructor() { }

  ngOnInit() {
  }

}
