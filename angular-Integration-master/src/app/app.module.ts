import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgModule, Component } from '@angular/core';

import {NgxPaginationModule} from 'ngx-pagination';

import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HostpitalListComponent } from './hostpital-list/hostpital-list.component';
import { UserComponent } from './user/user.component';



import { SearchPipe} from './providers/search.pipe';
import { AdminListComponent } from './admin-list/admin-list.component';
import { HospitalComponent } from './hospital/hospital.component';
import { Hospital } from './models/hospital';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientComponent } from './patient/patient.component';
import { NurseListComponent } from './nurse-list/nurse-list.component';
import { NurseComponent } from './nurse/nurse.component';


const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'hospitals',  component: HostpitalListComponent },
  { path: 'users',  component: UserComponent },
  { path: 'adminsPro', component: AdminListComponent},
  { path: 'hospital', component: HospitalComponent},
  { path: 'hospital/doctor-list', component: DoctorListComponent},
  { path: 'hospital/patient-list', component: PatientListComponent },
  { path: 'hospital/nurse-list', component:NurseListComponent},
  { path: 'doctor-list', component: DoctorListComponent},
  { path: 'patient-list', component: PatientListComponent },
  { path: 'doctor/patient-list', component: PatientListComponent },
  { path: 'doctor', component: DoctorComponent},
  { path: 'nurse-list', component:NurseListComponent},
  { path: "patient", component:PatientComponent},
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HostpitalListComponent,
    UserComponent,
    SearchPipe,
    AdminListComponent,
    HospitalComponent,
    DoctorListComponent,
    DoctorComponent,
    PatientListComponent,
    NurseListComponent,
    PatientComponent,
    NurseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
