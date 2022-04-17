import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;

  schoolManagementLinks = [
    {
      route: '/school-management/level',
      label: 'Niveau',
    },
    {
      route: '/school-management/grade',
      label: 'Classe',
    },
    {
      route: '/school-management/classroom',
      label: 'Salle',
    },
    {
      route: '/school-management/subject',
      label: 'Matière',
    },
    {
      route: '/school-management/student',
      label: 'Etudiant',
    },
    {
      route: '/school-management/parent',
      label: 'Parent',
    },
  ];
  
  timeManagementLinks = [
    {
      route: '/time-management/timetable',
      label: 'Emploi du temps',
    },
    {
      route: '/time-management/textbook',
      label: 'Cahier de texte',
    },
    {
      route: '/time-management/presence',
      label: 'Présence des étudiants',
    },
    {
      route: '/time-management/vacation',
      label: 'Congés',
    },
  ];
}
