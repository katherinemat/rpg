import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FirstComponent } from './first/first.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'first',
    component: FirstComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
