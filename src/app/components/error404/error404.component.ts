import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../../shared/animations/router.animation';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
  animations: [routerTransition()]
})
export class Error404Component implements OnInit {
  @HostBinding('@routerTransition') routerTransition;

  constructor() { }

  ngOnInit() {
  }

}
