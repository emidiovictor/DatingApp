import { Injectable } from "@angular/core";
import * as alertify from "alertifyjs";
declare let alertify: any;

@Injectable()
export class AlertfyService {
  constructor() {}

  confirm(message: string, okCallBack: () => any) {
    alertify.confirm(message, function(e) {
      if (e) {
        okCallBack();
      } else {
      }
    });
  }
  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.alert(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
