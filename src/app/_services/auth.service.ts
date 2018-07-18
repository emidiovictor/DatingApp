import { Injectable } from "@angular/core";
import {
  Http,
  RequestOptions,
  Headers,
  RequestOptionsArgs,
  Response
} from "../../../node_modules/@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  baseUrl: "http://localhost:57329/api/auth";
  constructor(private http: Http) {}
  userToken: any;

  login(model: any) {
    const headers = new Headers({ "Content-type": "application/json" });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + "/login", model, options).pipe(
      map((reponse: Response) => {
        const user = reponse.json();
        if (user) {
          localStorage.setItem("token", user.tokenString);
          this.userToken = user.tokenString;
        }
      })
    );
  }
}
