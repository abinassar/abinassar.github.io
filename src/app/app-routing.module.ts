import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'register-user',
    loadChildren: () => import('./pages/sign-in/pages/register-user/register-user.module').then( m => m.RegisterUserPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/sign-in/pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'verify-email-address',
    loadChildren: () => import('./pages/sign-in/pages/verify-email-address/verify-email-address.module').then( m => m.VerifyEmailAddressPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/home/pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
