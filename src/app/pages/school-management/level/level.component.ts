import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faAdd,
  faAngleRight,
  faGraduationCap,
  faLaptop,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { LevelService } from 'src/app/core/services/level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
  faLaptop = faLaptop;
  faAngleRight = faAngleRight;
  faAdd = faAdd;
  faGraduationCap = faGraduationCap;
  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;

  levels$!: Observable<any>;
  addLevelForm!: FormGroup;
  toggleAddModal!: boolean;

  constructor(
    private levelService: LevelService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.levels$ = this.levelService.getAllLevel().pipe(
      map((res) => {
        return res.payload;
      })
    );

    this.toggleAddModal = false;

    this.addLevelForm = new FormGroup({
      libelle: new FormControl('', Validators.required),
      cycle: new FormControl('', Validators.required),
      commentaire: new FormControl(''),
    });
  }

  refreshLevels() {
    this.levels$ = this.levelService.getAllLevel().pipe(
      map((res) => {
        return res.payload;
      })
    );
  }

  get libelle() {
    return this.addLevelForm.get('libelle');
  }

  get cycle() {
    return this.addLevelForm.get('cycle');
  }

  get commentaire() {
    return this.addLevelForm.get('commentaire');
  }

  onSubmitLevel(): void {
    const data = this.addLevelForm.value;
    this.levelService.addNewLevel(data).subscribe(() => {
      this.refreshLevels();
      this.onCloseModal();
      this.toastr.success('Niveau ajouté !');
    });
  }

  onToggleAddModal() {
    this.toggleAddModal = !this.toggleAddModal;
  }

  onCloseModal(): void {
    this.toggleAddModal = false;
  }
}
