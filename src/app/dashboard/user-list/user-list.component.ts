import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: Array<User> = [];
  loading: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUserList().subscribe((users: Array<User>) => {
      setTimeout(() => {
        this.userList = users;
        this.loading = false;
      }, 5000);
    });
  }

}
