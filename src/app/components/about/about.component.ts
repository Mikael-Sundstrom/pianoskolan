import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../../shared/animations/router.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [routerTransition()]
})
export class AboutComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition;

  constructor() { }

  ngOnInit() {
  }

}
