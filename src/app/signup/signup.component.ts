import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GlobalConstants } from '../shared/global-constrants';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { time } from 'console';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: any = FormGroup;
  responseMessage: any;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private userServices: UserService, private snackbarservices: SnackbarService,
    private dialogRef: MatDialogRef<SignupComponent>,
    private ngxService: NgxUiLoaderService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      contactNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      password: [null, [Validators.required]],
    })
  }
  loginAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    this.dialog.open(LoginComponent, dialogConfig);
  }
  handleSubmit() {
    this.ngxService.start();
    var formData = this.signupForm.value
    var data = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      password: formData.password

    }
    this.userServices.signUp(data).subscribe((Response:any)=>{
      this.ngxService.stop();
      this.dialogRef.close();
      this.responseMessage = Response?.message;
      this.snackbarservices.openSnackbar(this.responseMessage,"");
      this.router.navigate(['/']);

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
