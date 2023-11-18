import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationComponent } from 'src/app/material-component/dialog/confirmation/confirmation.component';
import { ChangePasswordComponent } from 'src/app/material-component/dialog/change-password/change-password.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  role: any;
  constructor(private router: Router,
    private dialog: MatDialog) {

  }
  logout(){
    const DialogConfig = new MatDialogConfig;
    DialogConfig.data ={
      message: 'logout'
    };
    const dialogRef = this.dialog.open(ConfirmationComponent,DialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatuschange.subscribe((user)=>{
      dialogRef.close();
      localStorage.clear();
      this.router.navigate(['/']);
    })

  }

changePassword(){
  const DialogConfig= new MatDialogConfig();
  DialogConfig.width="550px";
  this.dialog.open(ChangePasswordComponent, DialogConfig);
}

}
