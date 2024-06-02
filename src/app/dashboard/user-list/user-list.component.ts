import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import * as UserSelectors from '../../store/selectors/user.selector';
import * as UserActions from '../../store/actions/user.action';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: Array<User> = [];
  userList$: Observable<Array<User>> = of([]);
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store) {
    this.userList$ = this.store.select(UserSelectors.selectLoadUserList);
    this.loading$ = this.store.select(UserSelectors.selectUserListLoading);
    this.error$ = this.store.select(UserSelectors.selectUserListError);
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUserAction());
  }

}
