import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  res;
  body;

  headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  registerUser(data) {
    this.body = data;
    this.http
      .post("https://notes-byvaibhav.herokuapp.com/users/register", this.body, {
        headers: this.headers
      })
      .subscribe(
        (resp: any[]) => {
          this.res = resp;
          window.alert("Registered Successfully!");
        },
        (err) => window.alert("Browser using CORS Policy.")
      );
  }

  loginUser(data) {
    this.body = data;
    this.http
      .post("https://notes-byvaibhav.herokuapp.com/users/login", this.body, {
        headers: this.headers
      })
      .subscribe(
        (resp: any[]) => {
          this.res = resp;
          window.alert("Loggedin Succesfully!");
        },
        (err) => window.alert("Browser using CORS Policy.")
      );
  }
}
