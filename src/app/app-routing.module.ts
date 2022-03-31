import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TimerPageComponent } from './timer-page/timer-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'countdown-timer', component: TimerPageComponent },
  { path: 'my-info', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
