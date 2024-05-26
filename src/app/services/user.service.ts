import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';

const userCollection: string = 'user-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFirestore: AngularFirestore) { }

  getUserDetails(id: string) {
    return this.angularFirestore.collection(userCollection).doc(id).valueChanges();
  }

  getUserList() {
    return this.angularFirestore.collection(userCollection).snapshotChanges();
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
