import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GlobalConstants } from '../shared/global-constrants';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  responseMessage: string = '';
  isLoading: boolean = false;   // 🔑 flag for button spinner

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userServices: UserService,
    private snackbarservices: SnackbarService,
    private dialogRef: MatDialogRef<SignupComponent>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      contactNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      password: [null, [Validators.required]],
    });
  }

  loginAction(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(LoginComponent, dialogConfig);
  }

  handleSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }

    this.isLoading = true;  // ⏳ show button spinner
    const formData = this.signupForm.value;
    const data = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      password: formData.password
    };

    this.userServices.signUp(data).subscribe(
      (response: any) => {
        this.isLoading = false;  // ✅ stop spinner
        this.dialogRef.close();
        this.responseMessage = response?.message;
        this.snackbarservices.openSnackbar(this.responseMessage, '');
        this.router.navigate(['/']);
      },
      (error) => {
        this.isLoading = false;  // ✅ stop spinner
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarservices.openSnackbar(this.responseMessage, GlobalConstants.error);
      }
    );
  }
}
