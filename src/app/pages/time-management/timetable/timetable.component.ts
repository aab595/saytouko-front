import { Component, OnInit } from '@angular/core';
import {
  faCalendarAlt,
  faEdit,
  faEye,
  faLaptop,
  faPlus,
  faPlusCircle,
  faStar,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimetableComponent {
  faLaptop = faLaptop;
  addIcon = faPlusCircle;
  calendarIcon = faCalendarAlt;
  showIcon = faEye;

  allEvents = [
    {
      title: 'Cours réseau',
      start: '2022-04-11 08:00:00',
      end: '2022-04-11 10:00:00',
      backgroundColor: '#839c49',
    },
    {
      title: 'Cours Python',
      start: '2022-04-11 15:00:00',
      end: '2022-04-11 17:00:00',
    },
    {
      title: 'Cours JavaScript',
      start: '2022-04-13 15:00:00',
      end: '2022-04-13 17:00:00',
      teacher: 'M. DIOP',
      classroom: 'S13',
    },
    {
      title: 'Cours Marketing',
      start: '2022-04-14 08:00:00',
      end: '2022-04-14 10:00:00',
    },
  ];

  subjects = [
    {
      name: 'Matiere 1',
      background: 'bg-blue-500',
    },
    {
      name: 'Matiere 2',
      background: 'bg-yellow-500',
    },
    {
      name: 'Matiere 3',
      background: 'bg-green-500',
    },
    {
      name: 'Matiere 4',
      background: 'bg-purple-500',
    },
    {
      name: 'Matiere 4',
      background: 'bg-slate-500',
    },
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    locale: 'fr',
    firstDay: 1,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,dayGridDay',
    },
    buttonText: {
      today: "Aujourd'hui",
      month: 'Mois',
      week: 'Semaine',
      day: 'Jour',
      list: 'Liste',
    },
    events: this.allEvents,
    nowIndicator: true,
    editable: true,
    eventDrop: (infos) => {
      if (!confirm('Etes vous sûr.e de vouloir déplacer cet évènement ?')) {
        infos.revert();
      }
    },
    eventResize: (infos) => {
      console.log(infos.event.end);
    },
    eventClick: (infos) => {
      alert(infos.event.title);
    },
    dateClick: (infos) => {
      alert(infos.date);
    },
  };

  constructor() {}

  ngOnInit(): void {}

  onGetBg(bg: string) {
    console.log(bg);
  }
}
