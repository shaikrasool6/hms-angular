import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostpitalListComponent } from './hostpital-list/hostpital-list.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DoctorComponent } from './doctor/doctor.component';


const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
