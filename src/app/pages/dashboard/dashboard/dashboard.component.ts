import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faAnglesRight,
  faSignalPerfect,
  faUserAlt,
  faUsers,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faAnglesRight = faAnglesRight;
  topCardContent = [
    {
      badge: 'bg-pink-600',
      icon: faUsers,
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
      icon: faUserTie,
      title: 'Enseignants',
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

  constructor() {}

  ngOnInit(): void {}
}
