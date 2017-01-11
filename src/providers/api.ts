import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {
  private headers = new Headers();
  private userAuth: string;

  constructor(private _http: Http) {
    console.log('Hello Api Provider');
  }

  public addHeader(headerKey: string, headerContent) {
    this.headers.append(headerKey, headerContent);
  }

  public setUserAuth(email: string, password: string) {
    this.userAuth = "Basic " + btoa(`${email}:${password}`);
    this.addHeader("Authorization", this.userAuth);
  }

  public getUserAuth() {
    return this.userAuth;
  }

  public get() {
    // this._http.get(url, {
    // headers: this.headers
    // })
    //   .map(res => res.json())
    //   .subscribe(value, error, complete);
  }

}
