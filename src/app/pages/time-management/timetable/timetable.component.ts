import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { CalendarOptions } from '@fullcalendar/angular';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { ClassroomService } from 'src/app/core/services/classroom.service';
import { EventService } from 'src/app/core/services/event.service';
import { SubjectService } from 'src/app/core/services/subject.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimetableComponent {
  faAdd = faAdd;
  timetableForm: FormGroup;
  data: Date;
  toggleModal: boolean;

  events!: object[];
  formatEvents: object[] = [];
  subjects!: object[];
  classrooms!: object[];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridDay',
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
    dayHeaderFormat: { weekday: 'short' },
    allDaySlot: false,
    nowIndicator: true,
    editable: true,
    height: '500px',
    eventDrop: (infos) => {
      if (!confirm('Etes vous sûr.e de vouloir déplacer cet évènement ?')) {
        infos.revert();
      }
    },
    eventResize: (infos) => {
      console.log(infos.event.end);
    },
    eventClick: (infos) => {
      // alert(infos.event.title);
    },
    dateClick: (infos) => {
      // alert(infos.date);
      this.data = infos.date;
      this.onToggleModal();
    },
  };

  color: string;

  constructor(
    private eventService: EventService,
    private subjectService: SubjectService,
    private classroomService: ClassroomService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.toggleModal = false;
    this.timetableForm = new FormGroup({
      matiere: new FormControl('', Validators.required),
      couleur: new FormControl('', Validators.required),
      salle: new FormControl('', Validators.required),
      debut: new FormControl('', Validators.required),
      fin: new FormControl('', Validators.required),
    });

    this.getEvents();
    this.getSubjects();
    this.getClassrooms();
  }

  get matiere() {
    return this.timetableForm.get('matiere');
  }

  setCouleur() {
    this.couleur.setValue(this.color);
  }

  get couleur() {
    return this.timetableForm.get('couleur');
  }

  get salle() {
    return this.timetableForm.get('salle');
  }

  get debut() {
    return this.timetableForm.get('debut');
  }

  get fin() {
    return this.timetableForm.get('fin');
  }

  onToggleModal() {
    this.toggleModal = !this.toggleModal;
  }

  onSubmit() {
    const data = this.timetableForm.value;
    this.eventService.addNewSlot(data).subscribe(() => {
      this.getEvents();
      this.onToggleModal();
      this.toastr.success('Créneau ajouté !');
    });
  }

  getEvents() {
    this.eventService.getAllEvent().subscribe((response) => {
      if (response.message) {
        this.toastr.info(response.message);
      } else {
        response.payload.forEach((el) => {
          this.formatEvents.push({
            title: el['matiere'].libelle,
            start: el['debut'],
            end: el['fin'],
            color: el['couleur'],
          });
        });
        this.calendarOptions.events = this.formatEvents
      }
    });
  }

  getSubjects() {
    this.subjectService.getAllSubject().subscribe((response) => {
      if (!response.message) {
        this.subjects = response.payload;
      }
    });
  }

  getClassrooms() {
    this.classroomService.getAllClassroom().subscribe((response) => {
      if (!response.message) {
        this.classrooms = response.payload;
      }
    });
  }
}
