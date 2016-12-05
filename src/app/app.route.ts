import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {CourseListComponent} from "./courses/course-list/course-list.component";
import {CourseDetailComponent} from "./courses/course-detail/course-detail.component";
import {CoursesComponent} from "./courses/courses.component";

const CHILD_ROUTE_MAP = [
    {path: '', component: CoursesComponent},
    {path: '', component: CourseListComponent, outlet: 'sidebar'},
    {path: ':name/:type', component: CourseDetailComponent}
];

const APP_ROUTE_MAP:Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'courses', children: CHILD_ROUTE_MAP}

];

export const AppRoute = RouterModule.forRoot(APP_ROUTE_MAP);