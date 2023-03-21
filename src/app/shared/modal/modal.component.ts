import { ModalService } from './../../services/modal.service';
import { Component, Input, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(public modalService: ModalService, private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  @Input('modalID') modalIDProps!: string;

  closeModal(): void {
    this.modalService.modalToggle(this.modalIDProps);
  }
}
