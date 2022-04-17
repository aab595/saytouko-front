import { Component, OnInit } from '@angular/core';
import { faBuildingUser, faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss'],
})
export class ClassroomComponent implements OnInit {
  faLaptop = faLaptop;
  classroomIcon = faBuildingUser;

  constructor() {}

  ngOnInit(): void {}
}
