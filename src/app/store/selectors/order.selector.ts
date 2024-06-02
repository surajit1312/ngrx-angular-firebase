import { createFeatureSelector, createSelector } from '@ngrx/store';

import { OrderState } from '../states/order.state';

export const selectOrderState = createFeatureSelector<OrderState>('orders');

export const selectLoadOrderList = createSelector(
    selectOrderState,
    (state: OrderState) => state.orders
);

export const selectOrderListLoading = createSelector(
    selectOrderState,
    (state: OrderState) => state.loading
);

export const selectLoadOrderError = createSelector(
    selectOrderState,
    (state: OrderState) => state.error
);
