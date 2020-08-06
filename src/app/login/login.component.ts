import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpService } from "../http.service";

@Component({
  selector: "register-component",
  styleUrls: ["./login.styles.css"],
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  ngOnInit() {}

  constructor(private http: HttpService) {}

  onSubmit() {
    this.http.loginUser(this.loginForm.value);
  }
}
