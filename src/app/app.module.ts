import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { TimerPageComponent } from './timer-page/timer-page.component';
import { AllUsersInfoComponent } from './all-users-info/all-users-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserInfoComponent,
    TimerPageComponent,
    AllUsersInfoComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
