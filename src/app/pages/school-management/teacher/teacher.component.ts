import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faAdd,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { TeacherService } from 'src/app/core/services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  faAdd = faAdd;
  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;
  toggleAddModal!: boolean;
  addTeacherForm!: FormGroup;
  teachers$!: Observable<any>;

  constructor(
    private teacherService: TeacherService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.teachers$ = this.teacherService.getAllTeacher().pipe(
      map((data) => {
        return data.payload;
      })
    );
    this.toggleAddModal = false;
    this.addTeacherForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      classes: new FormControl(''),
      dateNaiss: new FormControl(''),
      sexe: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', Validators.required),
      adresse: new FormGroup({
        pays: new FormControl(''),
        ville: new FormControl(''),
        quartier: new FormControl(''),
      }),
      dateEntree: new FormControl(''),
      dateSortie: new FormControl(''),
      photo: new FormControl(''),
      nomUtilisateur: new FormControl('', Validators.required),
      motDePasse: new FormControl('', Validators.required),
      userType: new FormControl(''),
    });
  }

  get nom() {
    return this.addTeacherForm.get('nom');
  }

  get prenom() {
    return this.addTeacherForm.get('prenom');
  }

  get classes() {
    return this.addTeacherForm.get('classes');
  }

  get dateNaiss() {
    return this.addTeacherForm.get('dateNaiss');
  }

  get sexe() {
    return this.addTeacherForm.get('sexe');
  }

  get email() {
    return this.addTeacherForm.get('email');
  }

  get telephone() {
    return this.addTeacherForm.get('telephone');
  }

  get adresse() {
    return this.addTeacherForm.get('adresse');
  }

  get dateEntree() {
    return this.addTeacherForm.get('dateEntree');
  }

  get dateSortie() {
    return this.addTeacherForm.get('dateSortie');
  }

  get photo() {
    return this.addTeacherForm.get('photo');
  }

  get nomUtilisateur() {
    return this.addTeacherForm.get('nomUtilisateur');
  }

  get motDePasse() {
    return this.addTeacherForm.get('motDePasse');
  }

  get userType() {
    return this.addTeacherForm.get('userType');
  }

  refreshTeachers() {
    this.teachers$ = this.teacherService.getAllTeacher().pipe(
      map((data) => {
        return data.payload;
      })
    );
  }

  onSubmitTeacher(): void {
    const data = this.addTeacherForm.value;
    this.teacherService.addNewTeacher(data).subscribe(() => {
      this.onCloseModal();
      this.refreshTeachers();
      this.toastr.success('Enseignant ajouté !');
    });
  }

  onToggleAddModal() {
    this.toggleAddModal = !this.toggleAddModal;
  }

  onCloseModal(): void {
    this.toggleAddModal = false;
  }
}
