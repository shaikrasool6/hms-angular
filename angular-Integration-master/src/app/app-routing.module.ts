import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostpitalListComponent } from './hostpital-list/hostpital-list.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';


const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
