import { createAction, props } from '@ngrx/store';

import { User } from '../../models/user.model';

export const LOAD_USER_EVENT = '[UserList API] Load UserList';
export const LOAD_USER_EVENT_SUCCESS = '[UserList API] Load UserList Success';
export const LOAD_USER_EVENT_FAILURE = '[UserList API] Load UserList Failure';

export const loadUserAction = createAction(LOAD_USER_EVENT);
export const loadUserSuccessAction = createAction(LOAD_USER_EVENT_SUCCESS, props<{ users: Array<User | any> }>());
export const loadUserFailureAction = createAction(LOAD_USER_EVENT_FAILURE, props<{ error: any }>());
