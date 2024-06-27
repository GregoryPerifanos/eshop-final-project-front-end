import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AxiosService } from '../axios.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user = {
    username: '',
    email: '',
    password: '',
    firstname:'',
    lastname:'',
    balance:0
  };

  constructor(private axiosService: AxiosService, private snackBar: MatSnackBar) {

  }

  onSubmit(signupForm: NgForm) {
    if (signupForm.valid) {
      console.log('User:', this.user);
      
      this.axiosService.noAuthRequest("POST", '/register', this.user)
      console.log(this.axiosService.getAuthToken())
      this.snackBar.open(`Congratulations you have created an account proceed to Login!!`, 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
      
    
    }
  }
}
