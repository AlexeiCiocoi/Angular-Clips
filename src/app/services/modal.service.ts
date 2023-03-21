import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalArr: IModal[] = [];
  constructor() {}

  registerModal(id: string): void {
    this.modalArr.push({ id, visible: false });
  }

  unregisterModal(id: string) {
    this.modalArr = this.modalArr.filter((modal: IModal) => modal.id !== id);
  }
  isModalOpen(id: string): boolean {
    return Boolean(this.modalArr.find((elm: IModal) => elm.id === id)?.visible);
  }

  modalToggle(id: string): void {
    const modal = this.modalArr.find((elm: IModal) => elm.id === id);
    if (modal) modal.visible = !modal.visible;
  }
}
