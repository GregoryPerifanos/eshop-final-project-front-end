import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
private axiosClient: AxiosInstance;
  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:8080',
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
      }
    });
   }

   getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
   }

   setAuthToken(token: string | null): void {
    if (token != null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
   }

   noAuthRequest(method: string, url: string, data?: any) {
    return this.axiosClient({
      method: method,
      url: url,
      data: data
    });
   }

   request(method: string, url: string, data?: any) {
    let headers = {}

    if (this.getAuthToken() !== null) {
      headers = {"Authorization": "Bearer " + this.getAuthToken()};
    }

    return this.axiosClient({
      method: method,
      url: url,
      data: data,
      headers: headers
    });
  }

  getUserDetails(userId: number) {
    return this.request('GET', `/users/get/${userId}`);
  }

  updatePassword(userId: number, newPassword: string) {
    return this.request('POST', '/users/password_change', { userId, newPassword });
  }

  updateBalance(userId: number, newBalance: number) {
    return this.request('POST', '/users/add_funds', { userId, newBalance });
  }

  getUserIdFromToken(): number {
    const token = this.getAuthToken();
    if (!token) {
      throw new Error("No auth token found!!");
    }

    const decodedToken: any = jwtDecode(token);
    return decodedToken.userId;
  }
}
