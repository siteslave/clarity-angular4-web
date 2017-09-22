import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  fullname: string;
  collapsible: boolean = true;
  collapsed: boolean = true;

  constructor(private router: Router) {
    this.fullname = sessionStorage.getItem('fullname');
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('fullname');

    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
