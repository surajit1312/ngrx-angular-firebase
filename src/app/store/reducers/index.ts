import { ActionReducerMap } from '@ngrx/store';

import { orderReducer } from './order.reducer';
import { userReducer } from './user.reducer';
import { AppState } from '../states/app.state';

export const AppReducers: ActionReducerMap<AppState> = {
    orders: orderReducer,
    users: userReducer
};
