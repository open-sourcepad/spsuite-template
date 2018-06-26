import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  templateUrl: './loading-bar.pug',
})

export class LoadingBarComponent implements OnInit {

  constructor(private slimLoading: SlimLoadingBarService) {}

  ngOnInit() {}

  startLoad() {
    this.slimLoading.start();
  }

  stopLoad() {
    this.slimLoading.stop();
  }

  completeLoad() {
    this.slimLoading.complete();
  }

}
