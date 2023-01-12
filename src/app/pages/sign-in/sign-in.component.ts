import { Router } from '@angular/router';
import { AccountService } from './../../shared/services/account/account.service';
import { SignInService } from './../../shared/services/signIn/sign-in.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../shared/styles/account.component.scss'],
})
export class SignInComponent implements OnInit {
  autho = {
    user: '',
    password: '',
  };

  output:any = {};

  constructor(
    private sign: SignInService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.sign.login(this.autho.user, this.autho.password).subscribe(
      (next) => {
        this.accountService.setUser(next);
        this.router.navigate(['dashboard']);
      },
      (error: HttpErrorResponse) => {
        this.output = error.error;
        document.querySelectorAll('.unique-box').forEach(d => {
          if(d.querySelector('#' + this.output?.['input']) !== null){
            if(!d.classList.contains('invalid')){
              d.classList.add('invalid')
            }
          } else {
            if(d.classList.contains('invalid')){
              d.classList.remove('invalid')
            }
          }
        })
      }
    );
  }
}
