import { ModalService } from './../../services/modal.service';
import { Component, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input('modalID') modalIDProps!: string;

  constructor(public modalService: ModalService, private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy() {
    document.body.removeChild(this.el.nativeElement);
  }

  closeModal(): void {
    this.modalService.modalToggle(this.modalIDProps);
  }
}
