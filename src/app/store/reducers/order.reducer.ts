import { createReducer, on } from '@ngrx/store';

import * as OrderActions from '../actions/order.action';
import { OrderState } from '../states/order.state';

/**
 * Initial State
 */
const initialState: OrderState = {
    loading: false,
    orders: [],
    error: null
};

/**
 * Reducer Function
 */
export const orderReducer = createReducer(
    initialState,
    on(OrderActions.loadOrderAction, (state) => ({ ...state })),
    on(OrderActions.loadOrderActionSuccess, (state, { orders }) => ({ ...state, orders })),
    on(OrderActions.loadOrderActionFailure, (state, { error }) => ({ ...state, error }))
);
