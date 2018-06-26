import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './ui-elements.routing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiElementsComponent } from './ui-elements.component';
import { SharedModule } from '../shared/shared.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';


const UI_ELEMENTS_COMPONENTS = [
  ButtonsComponent,
  TypographyComponent,
  ModalComponent,
  FormsComponent,
  TableComponent,
]

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule
  ],
  declarations: [
    UiElementsComponent,
    ...UI_ELEMENTS_COMPONENTS
  ],
})

export class UiElementsModule {}
