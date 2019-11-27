import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ToastrProvider } from '../providers/toastr.service';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient = new Patient();

  pnt: any = [];

  constructor(private patientService:PatientService,private toastrService: ToastrProvider) { }

  ngOnInit() {
    this.getPatient();
  }

  getPatient = () => {
    this.patientService.getAllPatients().subscribe((response) => {
      this.pnt=response;
    },
    (error) => {
      console.log(error);
    })
  }
  addNew =() => {
   this.patient=new Patient();
  }

  savePatient =(patient) =>{
    this.patientService.addNewPatient(this.patient).subscribe ((response) => {

      if(this.patient.pid == undefined){
        this.toastrService.successmsg("patient added successfully");
      }
      else{
        this.toastrService.successmsg(patient.name +"patient updated successfully")
      }
      this.getPatient();

    })
  }


}
