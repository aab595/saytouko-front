import { Component } from '@angular/core';
import {
  faArrowRight,
  faSignalPerfect,
  faBuildingUser,
  faUserAlt,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  faLaptop = faLaptop;
  rightPoint = faArrowRight;

  topCardContent = [
    {
      badge: 'bg-pink-600',
      icon: faUserGraduate,
      title: 'Elèves',
      count: 200,
      more: 'Consulter les élèves',
    },
    {
      badge: 'bg-blue-600',
      icon: faUserAlt,
      title: 'Parents',
      count: 125,
      more: 'Consulter les parents',
    },
    {
      badge: 'bg-orange-600',
      icon: faBuildingUser,
      title: 'Enseignant',
      count: 20,
      more: 'Consulter les enseignants',
    },
    {
      badge: 'bg-gray-600',
      icon: faSignalPerfect,
      title: 'Utilisateurs',
      count: 97,
      more: 'Consulter les utilisateurs',
    },
  ];
}
