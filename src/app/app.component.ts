import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users!: Array<User>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserList().subscribe((list) => {
      this.users = list.map((e) => {
        return e.payload.doc.data() as User;
      });
      console.log(this.users);
    });
  }
}
