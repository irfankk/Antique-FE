import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList: any = [];

  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this._homeService.listHomePageProduct().subscribe(
      result => {
        console.log(result, 'rrrrrrrrrrrrr')
        this.productList = result;
        console.log('list------', this.productList)
      }, error => {
        console.log(error)
      }
    )
  }

  productSearch() {

  }

}
