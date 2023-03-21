import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(public modalService: ModalService) {}

  openModal($event: Event): void {
    $event.preventDefault();
    this.modalService.modalToggle('auth');
  }
}
