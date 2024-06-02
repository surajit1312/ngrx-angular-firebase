import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { OrderService } from '../../services/order.service';
import * as OrderActions from '../actions/order.action';

@Injectable()
export class OrderEffect {
    constructor(private action$: Actions, private orderService: OrderService) { }

    loadOrderList$ = createEffect(() =>
        this.action$.pipe(
            ofType(OrderActions.loadOrderAction),
            mergeMap(() =>
                this.orderService.getOrderList().pipe(
                    map((orderList) => {
                        return OrderActions.loadOrderActionSuccess({ orders: orderList });
                    }),
                        catchError((error: any) => of(OrderActions.loadOrderActionFailure({ error })))
                    )))
        );
}
