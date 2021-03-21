import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value)
    this._homeService.login(this.loginForm.value).subscribe(
      result => {
        console.log(result)
        localStorage.setItem('key', result['token']);
      }, error => {
        console.log(error)
      }
    )
  }

}
