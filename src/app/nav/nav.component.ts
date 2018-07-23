import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertfyService } from "../_services/alertfy.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authSevice: AuthService, private alert: AlertfyService) {}

  ngOnInit() {}

  login() {
    this.authSevice.login(this.model).subscribe(
      x => {
        this.alert.success("logged successfuly");
      },
      error => {
        this.alert.error(error);
      }
    );
  }

  logout() {
    this.authSevice.userToken = null;
    localStorage.removeItem("token");
    this.alert.message("logged out");
  }
  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }
}
