import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private router :Router,private userServices:UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
  this.userServices.checkToken().subscribe((response:any)=>{
    this.router.navigate(['/cafe/dashboard'])
  },(error:any)=>{
    console.log(error);
  })
    }
  }
  signupAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    this.dialog.open(SignupComponent, dialogConfig);
  }

  ForgotPasswordAction() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    this.dialog.open(ForgotPasswordComponent, dialogConfig);

  }
  loginAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    this.dialog.open(LoginComponent, dialogConfig);
  }
}
