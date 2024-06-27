import { Component , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AxiosService } from '../axios.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  user: any = {
    username: '',
    balance: 0,
    newPassword: ''
  };

  constructor(private axiosService: AxiosService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const userId = this.axiosService.getUserIdFromToken();
    this.axiosService.getUserDetails(userId)
    .then(response => {
      this.user = response.data;
    })
    .catch(error => {
      console.error('Error fetching the user details', error)
    });
  }

  onSubmit(form: NgForm): void {
    if (this.user.newPassword) {
      this.axiosService.updatePassword(this.user.id, this.user.newPassword)
      .then(response => {
        console.log("Password updated", response.data);
      })
      .catch(error => {
        console.error('Error updating password', error)
      });
    }

    this.axiosService.updateBalance(this.user.id, this.user.balance)
    .then(response => {
      console.log('Balance updated', response.data)
      this.snackBar.open(`The ${this.user.username}'s balance and password has been modified! `, 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
    })
    .catch(error => {
      console.error('Error updating balance', error);
      this.snackBar.open('Update of balance and password failed. Please try again.', 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
    });
  }

}
