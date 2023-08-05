import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
const routes: Routes = [

  {path: '', component:SignUpComponent},
  {path: 'dashboard', component:DashboardMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
