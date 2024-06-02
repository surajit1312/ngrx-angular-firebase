import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { Order } from '../../models/order.model';
import * as OrderSelectors from '../../store/selectors/order.selector';
import * as OrderActions from '../../store/actions/order.action';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderList: Array<Order> = [];
  orderList$: Observable<Array<Order>> = of([]);
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store) {
    this.orderList$ = this.store.select(OrderSelectors.selectLoadOrderList);
    this.loading$ = this.store.select(OrderSelectors.selectOrderListLoading);
    this.error$ = this.store.select(OrderSelectors.selectLoadOrderError);
  }

  ngOnInit(): void {
    this.store.dispatch(OrderActions.loadOrderAction());
  }

}
