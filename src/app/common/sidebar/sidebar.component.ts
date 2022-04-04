import { Component, OnInit } from '@angular/core';

import { Menu } from './menu';
import { RouteInfo } from 'src/app/models/router-info';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menu: RouteInfo[] = [];
  constructor() {}
  ngOnInit(): void {
    this.menu = Menu.slice();
  }
}
