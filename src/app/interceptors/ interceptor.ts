import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

import { HomeService } from "../services/home.service";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private _homeService: HomeService
  ) { }  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let customReq = request.clone({});
    if (this._homeService.isLoggedIn()) {
        console.log('hhhhhhhhhhhhh')
        customReq = request.clone({
            setHeaders: {
                Authorization: `Token ${localStorage.getItem('key')}`
            }
        }); 
    }  
    return next.handle(customReq);
  }
}

