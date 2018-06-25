import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UiElementsComponent } from './ui-elements.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TypographyComponent } from './typography/typography.component';

export const routes: Routes = [
  {
    path: '',
    component: UiElementsComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'typography',
        component: TypographyComponent
      },
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

