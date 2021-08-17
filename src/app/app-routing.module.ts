import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SyllabusComponent} from './syllabus/syllabus.component';
import {AssignmentsComponent} from './assignments/assignments.component';
import {LecturesComponent} from './lectures/lectures.component';

const routes: Routes = [
  { path : 'syllabus', component: SyllabusComponent},
  { path : 'assignments', component: AssignmentsComponent},
  {path : 'lectures', component: LecturesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
