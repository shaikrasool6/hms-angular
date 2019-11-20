import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  hospital: any =[];

  dr: any = [];

  constructor(private doctorService:DoctorService,) { }

  ngOnInit() {
    this.getDoctor();
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
