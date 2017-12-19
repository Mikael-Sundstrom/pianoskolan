import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../../shared/animations/router.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition;

  constructor() { }

  ngOnInit() {
  }

}
