import { appRoutes } from './../app.module';
import { NavigationEnd, Router } from '@angular/router';
import { AccountService } from './../shared/services/account/account.service';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../shared/styles/dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  routes: routerPath[] = [];
  public title:string = ''

  constructor(private accountService: AccountService, private router:Router) {
    /*if(accountService.getUser() === null || accountService.getUser() === undefined){
      router.navigate(['account'])
      return;
    }*/

    router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd | any) => {

      let url = event.url.split('/')
      this.title = url[url.length - 1];
      console.log(this.title);
    });
  }

  ngOnInit(): void {
    appRoutes.forEach((p) => {
      if (p.path === 'dashboard') {
        p.children?.forEach((s) => {
          if (s.path !== '') {
            let path = '' + p.path;
            path = '' + s.path;
            this.routes.push({ path: path, pathName: '' + s.path });
          }
        });
      }
    });
  }

  actived(){
    document.querySelector('.menu-burguer')?.classList.toggle('actived')
  }

}

export class routerPath {
  path = '';
  pathName = '';
}
