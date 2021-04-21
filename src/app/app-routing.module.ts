import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication/authentication.component';
import {MainComponent} from './main/main.component';
import {AuthGuard} from './authentication/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '', component: MainComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: '/posts', pathMatch: 'full'},
    ]
  },
  {path: 'auth', component: AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
