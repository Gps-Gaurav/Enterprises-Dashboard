import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constrants';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
changePasswordForm :any = FormGroup;
responseMessage :any;

  constructor(private formBuilder : FormBuilder,
  private userServices : UserService,
  public dialogRef : MatDialogRef<ChangePasswordComponent>,
  private ngxServices : NgxUiLoaderService,
  private snackbarServices : SnackbarService,private router :Router
    ) { }

  ngOnInit(): void {
    this.changePasswordForm= this.formBuilder.group({
      oldPassword : [null,[Validators.required]],
      newPassword: [null,[Validators.required]],
      confirmPassword : [null,[Validators.required]],
    })
  }

validateSubmit(){
  if(this.changePasswordForm.controls['newPassword'].value != this.changePasswordForm.controls['confirmPassword'].value){
    return true;

  }
  else{
    return false;
  }
}

handleChangePasswordSubmit(){
  this.ngxServices.start();
  var formData = this.changePasswordForm.value;
  var data ={
 oldPassword :formData.oldPassword,
 newPassword :formData.newPassword,
 confirmPassword :formData.confirmPassword

  }
  this.userServices.changePassword(data).subscribe((response:any)=>{
    this.ngxServices.stop();
    this.dialogRef.close();
    this.responseMessage = response?.message;
    this.snackbarServices.openSnackbar(this.responseMessage,"");
    this.router.navigate(['/']);

  },(error)=>{
    this.ngxServices.stop();
    if(error.error?.message){
      this.responseMessage = error.error?.message;

    }else{
      this.responseMessage = GlobalConstants.genericError;

    }
    this.responseMessage.openSnackbar(this.responseMessage,GlobalConstants.error);
  })
}

}
