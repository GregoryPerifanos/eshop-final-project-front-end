import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AxiosService } from '../axios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  user = {
    username: '',
    password: '',
  };

  constructor(private axiosService: AxiosService,private router: Router, private snackBar: MatSnackBar) {}

  onSubmitLogin(loginForm: NgForm): void {
    console.log(this.user);
    this.axiosService.noAuthRequest('POST', '/login', this.user).then(response => {
      this.axiosService.setAuthToken(response.data.password);
      this.snackBar.open(`Welcome ${this.user.username}! You can now go to the  products and start your purchase!`, 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
      
    }).catch(error => {
      console.error('Login failed', error);
      this.snackBar.open('Login failed. Please try again.', 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
    });
  }
}
