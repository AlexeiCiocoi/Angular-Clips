import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isAuthenticated: boolean = false;

  constructor(public modalService: ModalService, public auth: AuthService ) {}

  openModal($event: Event): void {
    $event.preventDefault();
    this.modalService.modalToggle('auth');
  }

}
