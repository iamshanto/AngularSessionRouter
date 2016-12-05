import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-list',
  template: `
    <ul>
    <li *ngFor="let val of courses">
    <a [routerLink]="val.path">{{val.name}}</a>
</li>
</ul>
  `,
  styles: []
})
export class CourseListComponent implements OnInit {

  courses = [
    {name: 'PHP', path: ['/courses', 'php', 'server']},
    {name: 'JAVA', path: ['/courses', 'java', 'server']},
    {name: 'Python', path: ['/courses', 'python', 'client']}
  ];
  constructor() { }

  ngOnInit() {
  }

}
