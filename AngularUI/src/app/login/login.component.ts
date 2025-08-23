import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { GlobalConstants } from '../shared/global-constrants';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  responseMessage: string = '';
  isLoading: boolean = false;   // 🔑 Spinner flag

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userServices: UserService,
    private snackbarservices: SnackbarService,
    private dialogRef: MatDialogRef<SignupComponent>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, [Validators.required]],
    });
  }

  ForgotPasswordAction(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }

  signupAction(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(SignupComponent, dialogConfig);
  }

  handleSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;  // ⏳ Show spinner
    const formData = this.loginForm.value;
    const data = {
      email: formData.email,
      password: formData.password,
    };

    this.userServices.login(data).subscribe(
      (response: any) => {
        this.isLoading = false; // ✅ Hide spinner
        this.dialogRef.close();
        localStorage.setItem('token', response.token);
        this.router.navigate(['/cafe/dashboard']);
      },
      (error) => {
        this.isLoading = false; // ✅ Hide spinner
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
