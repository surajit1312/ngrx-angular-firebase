import { createAction, props } from '@ngrx/store';

import { Order } from '../../models/order.model';

export const LOAD_ORDER_EVENT = '[OrderList API] Load OrderList';
export const LOAD_ORDER_EVENT_SUCCESS = '[OrderList API] Load OrderList Success';
export const LOAD_ORDER_EVENT_FAILURE = '[OrderList API] Load OrderList Failure';

export const loadOrderAction = createAction(LOAD_ORDER_EVENT);
export const loadOrderActionSuccess = createAction(LOAD_ORDER_EVENT_SUCCESS, props<{ orders: Array<Order | any> }>());
export const loadOrderActionFailure = createAction(LOAD_ORDER_EVENT_FAILURE, props<{ error: any }>());
