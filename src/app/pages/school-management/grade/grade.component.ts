import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faAdd,
  faCalendar,
  faDeleteLeft,
  faEdit,
  faLaptop,
  faPenToSquare,
  faTrashCan,
  faUsersRectangle,
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { GradeService } from 'src/app/core/services/grade.service';
import { LevelService } from 'src/app/core/services/level.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
})
export class GradeComponent implements OnInit {
  faLaptop = faLaptop;
  faUsersRectangle = faUsersRectangle;
  faCalendar = faCalendar;
  faAdd = faAdd;
  faEdit = faEdit;
  faDelete = faDeleteLeft;
  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;
  grades$!: Observable<any>;
  toggleAddModal!: boolean;
  addGradeForm!: FormGroup;
  allLevels$: Observable<any>;

  constructor(
    private gradeService: GradeService,
    private levelService: LevelService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.allLevels$ = this.levelService.getAllLevel().pipe(
      map((data) => {
        return data.payload;
      })
    );
    this.grades$ = this.gradeService.getAllGrade().pipe(
      map((data) => {
        return data.payload;
      })
    );
    this.toggleAddModal = false;
    this.addGradeForm = new FormGroup({
      libelle: new FormControl('', Validators.required),
      capacite: new FormControl('', [Validators.required, Validators.min(10)]),
      niveau: new FormControl('', Validators.required),
      commentaire: new FormControl(''),
    });
  }

  refreshGrades() {
    this.grades$ = this.gradeService.getAllGrade().pipe(
      map((data) => {
        return data.payload;
      })
    );
  }

  get libelle() {
    return this.addGradeForm.get('libelle');
  }

  get capacite() {
    return this.addGradeForm.get('capacite');
  }

  get niveau() {
    return this.addGradeForm.get('niveau');
  }

  get commentaire() {
    return this.addGradeForm.get('commentaire');
  }

  onSubmitGrade(): void {
    const data = this.addGradeForm.value;
    this.gradeService.addNewGrade(data).subscribe(() => {
      this.onCloseModal();
      this.refreshGrades();
      this.toastr.success('Classe ajoutée !');
    });
  }

  onToggleAddModal() {
    this.toggleAddModal = !this.toggleAddModal;
  }

  onCloseModal(): void {
    this.toggleAddModal = false;
  }
}
