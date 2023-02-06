import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  public users$ = this.usersService.users$;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers();
  }
}
