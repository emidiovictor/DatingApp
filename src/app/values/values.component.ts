
import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-value",
  templateUrl: "values.component.html",
  styleUrls: ["./values.component.css"]
})
export class ValuesComponent implements OnInit {
  values: any;

  constructor(private http: Http) {}

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:57329/api/values').subscribe(response => {
      this.values = response.json();
    });
  }
}
