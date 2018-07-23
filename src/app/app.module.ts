import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { AlertfyService } from "./_services/alertfy.service";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { HttpClientModule } from "../../node_modules/@angular/common/http";
import { BsDropdownModule } from 'ngx-bootstrap';
import { MemeberListComponent } from './memeber-list/memeber-list.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from "../../node_modules/@angular/router";
import { appRoutes } from "./route";
import { AuthGuard } from "./_guards/auth.guard";


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemeberListComponent,
      ListComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
  providers: [AuthService, AlertfyService, ErrorInterceptorProvider, AuthGuard],
  bootstrap: [AppComponent, NavComponent]
})
export class AppModule { }
