import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertfyService } from "../_services/alertfy.service";
import { Router } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authSevice: AuthService, private alert: AlertfyService, private router: Router) { }

  ngOnInit() { }

  login() {
    this.authSevice.login(this.model).subscribe(
      x => {
        this.alert.success("logged successfuly");
      },
      error => {
        this.alert.error(error);
      }, () => {
        this.router.navigate(['/members']);
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  logout() {
    localStorage.removeItem("token");
    this.alert.message("logged out");
    this.router.navigate(['/home']);
  }
}
