import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './pages/components/main-menu/main-menu.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {path :'', component: MainMenuComponent},
  {path:'settings',component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
