import { Component, OnInit } from '@angular/core';
import {
  faEdit,
  faGraduationCap,
  faLaptop,
  faPlus,
  faTrash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { LevelService } from 'src/app/core/services/level.service';

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
  crossIcon = faXmark;
  levels$!: Observable<any>;

  overlay!: HTMLDivElement;
  showBtn!: HTMLButtonElement;
  closeModal!: HTMLButtonElement;

  constructor(private levelService: LevelService) {}

  ngOnInit(): void {
    this.levels$ = this.levelService.getAllLevel();
    this.levels$.subscribe((res) => console.log(res));

    this.overlay = document.querySelector('#overlay')!;
    this.showBtn = document.querySelector('#showBtn')!;
    this.closeModal = document.querySelector('#close-modal')!;

    const toggleModal = () => {
      this.overlay.classList.toggle('hidden')
      this.overlay.classList.toggle('flex')
    }

    this.showBtn.addEventListener('click', toggleModal);

    this.closeModal.addEventListener('click', toggleModal);
  }

  toggleModal(): void {
    document.querySelector('authentication-modal')?.classList.toggle('hidden');
    document.querySelector('authentication-modal')?.classList.toggle('flex');
  }
}
