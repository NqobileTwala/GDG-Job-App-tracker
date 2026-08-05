import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.Login) },
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
  { path: '**', redirectTo: '' }
];
