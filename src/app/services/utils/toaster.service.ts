import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions } from 'ng2-toasty';

@Injectable()
export class ToasterService {

  private toastOptions: ToastOptions;
  private errorToastOptions: ToastOptions;

  constructor(
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig) {
      this.toastyConfig.theme = 'material';
      this.toastOptions = {
        title: 'Success',
        showClose: true,
        timeout: 10000,
        theme: 'material',
      };

      this.errorToastOptions = {
        title: 'Error',
        showClose: true,
        timeout: 10000,
        theme: 'material',
      }
    }

  displayToast(msg) {
    this.toastOptions.msg = msg;
    this.toastyService.success(this.toastOptions);
  }

  displayErrorToast(msg) {
    this.errorToastOptions.msg = msg;
    this.toastyService.error(this.errorToastOptions);
  }
  
}
