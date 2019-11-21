import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { ToastrProvider } from '../providers/toastr.service';
import { Doctor } from '../models/doctor';
import { HospitalService } from '../services/hospital.service';
import { Hospital } from '../models/hospital';
declare var swal: any;
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {


  doctor = new  Doctor();

  dr: any = [];

  constructor(private doctorService:DoctorService,  private toastrService: ToastrProvider) { }

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
  addNew = () => {

          this.doctor = new Doctor();

    }


  saveDoctor = (doctor) => {

    this.doctorService.addNewDoctor(this.doctor).subscribe((response) => {

      if(response !=null) {
        if(this.doctor.id == undefined) {
          this.toastrService.successmsg("doctor added successfully..");
        }
        else{
          this.toastrService.successmsg(doctor.name+" updated successfully");
        }
        this.getDoctor();
      }
    },(error) => {
      console.log("something is wrong")
      alert(error.error.error[0])
    })
  }
editDoctor = (doctor) => {
  this.doctor = doctor;
  this.doctorService.editDoctor(doctor).subscribe(response => {
    this.getDoctor();
  },(error) => {
    console.log("something is wrong")
    alert(error.error.error[0]);
  })
}

deleteDoctor = (doctor) => {
  swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((response) => {
    this.doctorService.deleteDoctor(doctor).subscribe(response => {
      this.toastrService.successmsg("Doctor deleted successfully..");
      this.getDoctor();
    },
      error => {
        this.toastrService.infotoastr(error.error);
      })
  },
    (error) => {
      this.toastrService.infotoastr("You canceled your choice");
    })
}


}
