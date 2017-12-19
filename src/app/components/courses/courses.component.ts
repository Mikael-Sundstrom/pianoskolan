import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../../shared/animations/router.animation';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  animations: [routerTransition()]
})
export class CoursesComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition;

  constructor() { }

  ngOnInit() {
  }

}
