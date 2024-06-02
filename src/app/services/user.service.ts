import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const userCollection: string = 'user-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFirestore: AngularFirestore) { }

  getUserDetails(id: string) {
    return this.angularFirestore.collection(userCollection).doc(id).valueChanges();
  }

  getUserList(): Observable<Array<User>> {
    return this.angularFirestore.collection(userCollection).snapshotChanges().pipe(
      switchMap((data: Array<Object>) => {
        const users: Array<User> = data.map((user: any) => {
          return user?.payload?.doc?.data();
        });
        return of(users);
      })
    );
  }

  createUser(user: User) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection(userCollection).add(user).then(
        (response) => {
          console.log('user added!');
        }, (error) => {
          console.error('user addition failed!', error);
        });
    });
  }

  deleteUser(user: User) {
    return this.angularFirestore.collection(userCollection).doc(user.userName).delete();
  }

  updateUser(user: User) {
    return this.angularFirestore.collection(userCollection).doc(user.userName).update({
      userName: user.userName,
      type: user.type,
      country: user.country
    });
  }
}
