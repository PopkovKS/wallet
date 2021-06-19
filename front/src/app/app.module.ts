import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistrComponent } from './pages/auth/registr/registr.component';
import { FirstSettingComponent } from './pages/first-setting/first-setting.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainMenuComponent } from './pages/components/main-menu/main-menu.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegistrComponent,
    FirstSettingComponent,
    DashboardComponent,
    MainMenuComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
