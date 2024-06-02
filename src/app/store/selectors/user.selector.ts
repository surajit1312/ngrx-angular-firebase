import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');

export const loadUserListSelector = createSelector(
    selectUserState,
    (state: UserState) => state.users
);

export const loadErrorUserListSelector = createSelector(
    selectUserState,
    (state: UserState) => state.error
);
