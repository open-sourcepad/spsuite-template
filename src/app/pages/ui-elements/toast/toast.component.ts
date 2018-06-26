import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../../services/utils';

@Component({
  templateUrl: './toast.pug',
})

export class ToastComponent implements OnInit {

  constructor(
    private toasterService: ToasterService
  ) {}

  ngOnInit() {}

  showSuccessToast() {
    this.toasterService.displayToast('Nice!');
  }

  showErrorToast() {
    this.toasterService.displayErrorToast('Nah!');
  }
}
