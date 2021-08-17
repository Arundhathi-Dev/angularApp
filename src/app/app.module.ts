import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { LecturesComponent } from './lectures/lectures.component';

@NgModule({
  declarations: [
    AppComponent,
    SyllabusComponent,
    AssignmentsComponent,
    LecturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
