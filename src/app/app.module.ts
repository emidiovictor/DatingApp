import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ValuesComponent } from "./values/values.component";
import { HttpModule } from "@angular/http";
import { NavComponent } from "./nav/nav.component";
import { FormsModule} from "@angular/forms";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
   declarations: [
      AppComponent,
      ValuesComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      FormsModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent,
      NavComponent
   ]
})
export class AppModule {}
