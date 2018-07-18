import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authSevice: AuthService) {}

  ngOnInit() {}

  login() {
    this.authSevice.login(this.model).subscribe(
      x => {
        console.log("logged in succesfully");
      },
      error => {
        console.log("fail to login");
      }
    );
  }

  logout(){
    this.authSevice.userToken = null;
    localStorage.removeItem('token');
    console.log("logout");
  }
  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }

}
