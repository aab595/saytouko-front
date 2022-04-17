import { Component, OnInit } from '@angular/core';
import {
  faCalendarAlt,
  faEdit,
  faLaptop,
  faPlus,
  faStar,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
})
export class GradeComponent implements OnInit {
  classroomIcon = faStar;
  faLaptop = faLaptop;
  addIcon = faPlus;
  calendarIcon = faCalendarAlt;
  editIcon = faEdit;
  deleteIcon = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
