import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  onlogin() {
    alert('login successfully');
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
  login() {
    this.router.navigate(['homepage']);
  }
}
