import { Component, OnInit } from '@angular/core';
import { appRoutes } from 'src/app/app.module';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../../styles/sharedComp.component.scss'],
})
export class NavBarComponent implements OnInit {

  routes: routerPath[] = [];

  constructor() {
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

  ngOnInit(): void {}

  menuActived(){
    document.querySelector('.menu-burguer')?.classList.toggle('actived')
  }
}
export class routerPath {
  path = '';
  pathName = '';
}
