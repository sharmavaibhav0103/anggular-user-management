import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpService } from '../http.service';

@Component({
  selector: "register-component",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.styles.css"]
})
export class RegisterComponent {

  
  registerForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  });

  ngOnInit() {}

  constructor(private http: HttpService){}

  onSubmit() {
    this.http.registerUser(this.registerForm.value);
  }
}
