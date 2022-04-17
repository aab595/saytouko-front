import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolManagementRoutingModule } from './school-management-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
FullCalendarModule.registerPlugins([
  interactionPlugin,
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
]);
import { LevelComponent } from './level/level.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { GradeComponent } from './grade/grade.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [
    LevelComponent,
    ClassroomComponent,
    GradeComponent,
    SubjectComponent,
    StudentComponent,
    ParentComponent,
    TeacherComponent,
  ],
  imports: [
    CommonModule,
    SchoolManagementRoutingModule,
    FontAwesomeModule,
    FullCalendarModule,
  ],
  exports: [
    LevelComponent,
    ClassroomComponent,
    GradeComponent,
    SubjectComponent,
    StudentComponent,
    ParentComponent,
    TeacherComponent,
  ],
})
export class SchoolManagementModule {}
