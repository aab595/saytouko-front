import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelComponent } from './level/level.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { GradeComponent } from './grade/grade.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { faBookOpenReader, faDoorOpen, faGraduationCap, faUser, faUserGraduate, faUsersRectangle, faUserTie } from '@fortawesome/free-solid-svg-icons';

const routes: Routes = [
  {
    path: 'level',
    component: LevelComponent,
    data: { icon:faGraduationCap, title: 'Niveau' },
  },
  {
    path: 'grade',
    component: GradeComponent,
    data: { icon:faUsersRectangle, title: 'Classe' },
  },
  {
    path: 'classroom',
    component: ClassroomComponent,
    data: { icon:faDoorOpen, title: 'Salle' },
  },
  {
    path: 'subject',
    component: SubjectComponent,
    data: { icon:faBookOpenReader, title: 'Matière' },
  },
  {
    path: 'student',
    component: StudentComponent,
    data: { icon:faUserGraduate, title: 'Etudiant' },
  },
  {
    path: 'parent',
    component: ParentComponent,
    data: { icon:faUser, title: 'Parent' },
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    data: { icon:faUserTie, title: 'Enseignant' },
  },
  {
    path: 'level/:id',
    component: LevelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolManagementRoutingModule {}
