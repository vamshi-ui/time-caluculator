import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userInfo!: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const userData: any = localStorage.getItem('userData');
    this.userInfo = JSON.parse(userData);
  }

  goToTimer(id: any): void {
    this.router.navigate(['countdown-timer'], { queryParams: { id } });
  }
}
