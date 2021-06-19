import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {  Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user : FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.user = this.formBuilder.group({
      email: ['k.popkov@bk.ru', [Validators.required, Validators.email]],
      password: ['3', Validators.required],
    });

  }

  ngOnInit(): void {
  }

  logForm() {

    this.router.navigate(['profile']);
  }
}
