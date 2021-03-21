import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedIn = false;

  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit() {
    this.loggedIn = this._homeService.isLoggedIn();
  }

  logout() {
    localStorage.removeItem('key');
  }

}
