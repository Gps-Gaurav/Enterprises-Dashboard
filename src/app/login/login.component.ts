import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { GlobalConstants } from '../shared/global-constrants';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  responseMessage: any;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private userServices: UserService, private snackbarservices: SnackbarService,
    private dialogRef: MatDialogRef<SignupComponent>,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
   email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
   password: [null, [Validators.required]],
    })
  }
  handleSubmit() {
    this.ngxService.start();
    var formData = this.loginForm.value
    var data = {
      email: formData.email,
      password: formData.password

    }
    this.userServices.login(data).subscribe((Response:any)=>{
      this.ngxService.stop();
      this.dialogRef.close();
   localStorage.setItem('token',Response.token);
      this.router.navigate(['/cafe/dashboard']);

    },(error)=>{
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage = error.error?.message;

      }else{
        this.responseMessage = GlobalConstants.genericError;

      }
      this.snackbarservices.openSnackbar(this.responseMessage,GlobalConstants.error);
    })
  }

}
