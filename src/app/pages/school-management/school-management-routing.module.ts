import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelComponent } from './level/level.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { GradeComponent } from './grade/grade.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path: 'level', component: LevelComponent },
  { path: 'grade', component: GradeComponent },
  { path: 'classroom', component: ClassroomComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'student', component: StudentComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'teacher', component: TeacherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolManagementRoutingModule {}
