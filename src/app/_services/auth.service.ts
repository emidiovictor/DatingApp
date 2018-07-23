import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import {
  Http,
  RequestOptions,
  Headers,
  Response
} from "../../../node_modules/@angular/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "../../../node_modules/rxjs";
import {
  HttpClient,
  HttpHeaders
} from "../../../node_modules/@angular/common/http";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  baseUrl: "http://localhost:57329/api/auth";
  userToken: any;
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  login(model: any) {
    return this.http.post("http://localhost:57329/api/auth/login", model, this.httpOptions).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.tokenString);
          this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
          console.log(this.decodedToken);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post("http://localhost:57329/api/auth/register", model);
  }



  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }
}
