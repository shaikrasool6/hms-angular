import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Admin } from '../classes/admin';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private admin = new Admin();

  constructor(private adminService : AdminService, private router : Router) { }

  ngOnInit() {
    if((this.adminService.isLoggedIn()) )
    {
        this.router.navigate(['/profile' , localStorage.getItem('id')]);
    }
    else
    {
        this.router.navigate(['/login']);
    }
  }

  // create the form object.
  form = new FormGroup({
    email : new FormControl('' , Validators.required),
    password : new FormControl('' , Validators.required)
  });

  Login(LoginInformation)
  {
      this.admin.emailId = this.Email.value;
      this.admin.password = this.Password.value;

      this.adminService.login(this.admin).subscribe(
        response => {
            let result =  response.json();

            if(result > 0)
            {
              let token = response.headers.get("Authorization");

              localStorage.setItem("token" , token);
              localStorage.setItem("id" , result);

              this.router.navigate(['/profile', result]);
            }
            if(result == -1)
            {
              alert("please register before login Or Invalid combination of Email and password");
            }

        },
        error => {
            console.log("Error in authentication");
        }
      );
  }

  get Email(){
      return this.form.get('email');
  }

  get Password(){
      return this.form.get('password');
  }

}
