import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { UserService } from '../../services/user.service';
import * as UserActions from '../actions/user.action';

@Injectable()
export class UserEffect {
    constructor(private action$: Actions, private userService: UserService) { }

    loadUserList$ = createEffect(() =>
        this.action$.pipe(
            ofType(UserActions.loadUserAction),
            mergeMap(() =>
                this.userService.getUserList().pipe(
                    map(userList => {
                        return UserActions.loadUserSuccessAction({ users: userList });
                    }),
                        catchError((error: any) => of(UserActions.loadUserFailureAction({ error })))
                    )))
        );
}
