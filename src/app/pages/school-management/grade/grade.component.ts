import { Component, OnInit } from '@angular/core';
import {
  faCalendarAlt,
  faEdit,
  faLaptop,
  faPlus,
  faStar,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { GradeService } from 'src/app/core/services/grade.service';

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
  grades$!: Observable<any>;

  constructor(private gradeService: GradeService) {}

  ngOnInit(): void {
    this.grades$ = this.gradeService.getAllGrade();
    this.grades$.subscribe((res) => console.log(res));
  }
}
