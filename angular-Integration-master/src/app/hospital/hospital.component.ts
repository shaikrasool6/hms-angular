import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { HospitalService } from '../services/hospital.service';
import { Hospital } from '../models/hospital';
import { Doctor } from '../models/doctor';


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospital = new Hospital();
  dr : any =[];
  hospitals: any = [];

  constructor( private doctorService:DoctorService, private hospitalService:HospitalService) { }

  ngOnInit() {

  }



 getDoctorsBasedOnHospitals = (hospital) => {
   this.hospitalService.getOneHospital(hospital.hospId).subscribe((response) => {
  this.hospitals = response;
   console.log(response);
   console.log(this.hospitals);
 },
 (error) => {
   console.log(error);
 })

  }
}


