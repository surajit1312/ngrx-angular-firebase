import { createReducer, on } from '@ngrx/store';

import * as UserActions from '../actions/user.action';
import { UserState } from '../states/user.state';

/**
 * Initial State
 */
const initialState: UserState = {
    loading: false,
    users: [],
    error: null
};

/**
 * Reducer function
 */
export const userReducer = createReducer(
    initialState,
    on(UserActions.loadUserAction, (state) => ({ ...state })),
    on(UserActions.loadUserSuccessAction, (state, { users }) => ({ ...state, users })),
    on(UserActions.loadUserFailureAction, (state, { error }) => ({ ...state, error }))
);
