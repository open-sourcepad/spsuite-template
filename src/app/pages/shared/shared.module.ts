import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';

const SHARED_COMPONENTS = [
  NavbarComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...SHARED_COMPONENTS
  ],
  exports: [
    ...SHARED_COMPONENTS
  ]
})

export class SharedModule {}
