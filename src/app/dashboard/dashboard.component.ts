import { Router } from '@angular/router';
import { AccountService } from './../shared/services/account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  constructor(private accountService: AccountService, private router:Router) {
    if(accountService.getUser() === null || accountService.getUser() === undefined){
      router.navigate(['account'])
    }
  }

  ngOnInit(): void {
  }

}
