import { Component, OnInit } from '@angular/core';
import {
  faEdit,
  faGraduationCap,
  faLaptop,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
  levelIcon = faGraduationCap;
  faLaptop = faLaptop;
  addIcon = faPlus;
  editIcon = faEdit;
  deleteIcon = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
