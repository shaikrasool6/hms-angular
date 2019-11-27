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
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'hospitals',  component: HostpitalListComponent },
  { path: 'users',  component: UserComponent },
  { path: 'adminsPro', component: AdminListComponent},
  { path: 'hospital', component: HospitalComponent},
  { path: 'dr', component: DoctorComponent},
  { path: 'pnt', component:PatientComponent},

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
    DoctorComponent,
    PatientComponent
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
