import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthUserGuard} from "./_helpers/auth-user.guard";
import {AuthAdminGuard} from "./_helpers/auth-admin.guard";

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./public/public.module')
      .then(m => m.PublicModule)
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule), canActivate:[AuthUserGuard]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule), canActivate:[AuthAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
