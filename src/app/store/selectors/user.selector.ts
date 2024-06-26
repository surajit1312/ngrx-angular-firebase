import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from '../states/user.state';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectLoadUserList = createSelector(
    selectUserState,
    (state: UserState) => state.users
);

export const selectUserListLoading = createSelector(
    selectUserState,
    (state: UserState) => state.loading
);

export const selectUserListError = createSelector(
    selectUserState,
    (state: UserState) => state.error
);
