import { Injectable } from "@angular/core";
import {
  Http,
  RequestOptions,
  Headers,
  Response
} from "../../../node_modules/@angular/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "../../../node_modules/rxjs";

@Injectable()
export class AuthService {
  baseUrl: "http://localhost:57329/api/auth";
  constructor(private http: Http) {}
  userToken: any;

  login(model: any) {
    return this.http
      .post(
        "http://localhost:57329/api/auth/login",
        model,
        this.requestOptions()
      )
      .pipe(
        map((reponse: Response) => {
          const user = reponse.json();
          if (user) {
            localStorage.setItem("token", user.tokenString);
            this.userToken = user.tokenString;
          }
        }),
        catchError(this.handleError)
      );
  }

  register(model: any) {
    return this.http
      .post(
        "http://localhost:57329/api/auth/register",
        model,
        this.requestOptions()
      )
      .pipe(
        map((response: Response) => {
          return true;
        }),
        catchError(this.handleError)
      );
  }

  private requestOptions() {
    const headers = new Headers({ "Content-type": "application/json" });
    return new RequestOptions({ headers: headers });
  }

  private handleError(error: Response) {
    const applicationError = error.headers.get("Application-Error");
    if (applicationError) {
      return throwError(applicationError);
    }
    const serverError = error.json();
    let modelStateErrors = "";
    if (serverError) {
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + "\n";
        }
      }
    }
    return throwError(modelStateErrors);
  }
}
