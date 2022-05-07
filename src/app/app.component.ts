import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title!: string;
  icone!: IconProp;
  isCollapsed = false;
  faLaptop = faLaptop

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
    {
      route: '/school-management/teacher',
      label: 'Enseignant',
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.router.events.forEach((e) => {
      if (e instanceof NavigationEnd) {
        this.route.root.children.map((infos) => {
          infos.snapshot.children.map((response) => {
            this.icone = response.data['icon'];
            this.title = response.data['title'];
          });
        });
      }
    });
  }
}
