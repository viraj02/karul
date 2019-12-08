import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  booksRef: AngularFireList<any>;
  bookRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, ) { }

  submitData(value) {
    this.db.list('items').push(value);
  }

}

export interface FeedBack {
  $key: string;
  user_name: string;
  mailID: number;
  mobile_no?: string;
  comments: string;
}
