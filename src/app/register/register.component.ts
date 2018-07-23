import { EventEmitter, Component, OnInit, Input, Output } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertfyService } from "../_services/alertfy.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  model: any = {};

  // emmits event
  @Output() cancelRegister = new EventEmitter();

  constructor(
    private authService: AuthService,
    private alert: AlertfyService
  ) {}

  ngOnInit() {}


  register() {
    this.authService.register(this.model).subscribe(
      () => {
        this.alert.success("Registrered succesfuly");
      },
      error => {
        this.alert.error(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alert.warning("Cancelled");
  }
}
