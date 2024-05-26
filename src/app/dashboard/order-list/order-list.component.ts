import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderList: Array<Order> = [];
  loading: boolean = true;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loading = true;
    this.orderService.getOrderList().subscribe((list) => {
      setTimeout(() => {
        this.orderList = list.map((e) => {
          return e.payload.doc.data() as Order;
        });
        this.loading = false;
      }, 5000);
    });
  }

}
