import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { HospitalService } from '../services/hospital.service';
import { Hospital } from '../models/hospital';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospital = new Hospital();
  dr: any=[];
  constructor( private doctorService:DoctorService, private hospitalService:HospitalService) { }

  ngOnInit() {
  this.hospitalService.getOneHospital(this.hospital).subscribe((response) => {

    if(response !=null){
      if(this.hospital.hospId != undefined){
        this.getDoctor();
      }
    }
  })
  }

  getDoctor = () => {

    this.doctorService.getAllDoctors().subscribe((response) => {
     this.dr = response;
   },
   (error) => {
     console.log(error);
   })

 }
}
