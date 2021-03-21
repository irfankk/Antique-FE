import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  listHomePageProduct() {
    return this.http.get(environment.ApiService + 'product/list/')

  }

  login(params) {
    return this.http.post(environment.ApiService + 'identity/login', params)
  }

  isLoggedIn() {
    const token = localStorage.getItem('key');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

}
