import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {LandingComponent} from "./landing/landing.component";
import {UserComponent} from "./user/user.component";
import {DoctorComponent} from "./doctor/doctor.component";
import {PatientComponent} from "./patient/patient.component";
import {AppointmentComponent} from "./appointment/appointment.component";
import {CreateUserComponent} from "./create-user/create-user.component";


const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'create-user', component: CreateUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
