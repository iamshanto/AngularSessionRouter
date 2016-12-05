import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'course-detail',
  template: `
    <div>
    Welcome to {{name}} course
</div>
  `,
  styles: []
})
export class CourseDetailComponent implements OnInit {

  name:string = '';
  paramSubs;

  constructor(private activatedRoute: ActivatedRoute) {
    this.paramSubs = this.activatedRoute.params.subscribe(
        value => this.name = value['name']
    );
  }

  ngOnInit() {
  }

}
