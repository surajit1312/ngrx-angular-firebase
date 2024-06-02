import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Order } from '../models/order.model';

const orderCollection: string = 'order-list';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private angularFirestore: AngularFirestore) { }

  getOrderDetails(id: string) {
    return this.angularFirestore.collection(orderCollection).doc(id).valueChanges();
  }

  getOrderList() {
    return this.angularFirestore.collection(orderCollection).snapshotChanges().pipe(
      switchMap((data: Array<Object>) => {
        const orders: Array<Order> = data.map((order: any) => {
          return order?.payload?.doc?.data();
        });
        return of(orders);
      })
    );
  }

  createOrder(order: Order) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection(orderCollection).add(order).then(
        (response) => {
          console.log('order added!');
        }, (error) => {
          console.error('order addition failed!', error);
        });
    });
  }

  deleteOrder(order: Order) {
    return this.angularFirestore.collection(orderCollection).doc(order.item).delete();
  }

  updateOrder(order: Order) {
    return this.angularFirestore.collection(orderCollection).doc(order.item).update({
      item: order.item,
      quantity: order.quantity,
      source: order.source,
      destination: order.destination,
      shipment: order.shipment
    });
  }
}
