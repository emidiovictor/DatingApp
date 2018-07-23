import { Injectable } from "../../../node_modules/@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, throwError } from "../../../node_modules/rxjs";
import { catchError } from "../../../node_modules/rxjs/operators";
import { HttpResponse } from "../../../node_modules/@types/selenium-webdriver/http";

@Injectable()
export class ErrorIntercepter implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          return throwError(error.statusText);
        }
        if (error instanceof HttpErrorResponse) {
          const appError = error.headers.get("Application-Error");
          if (appError) {
            console.log(appError);
            return throwError(appError);
          }
          const serverError = error.error;
          let modelStateError = "";
          if (serverError && typeof serverError === "object") {
            for (const key in serverError) {
              if (serverError[key]) {
                modelStateError += serverError[key] + "\n";
              }
            }
          }
          return throwError(modelStateError || serverError || "Server Error");
        }
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorIntercepter,
  multi: true
};
