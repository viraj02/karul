import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  booksRef: AngularFireList<any>;
  bookRef: AngularFireObject<any>;
  formDetails: any = [];

  constructor(private db: AngularFireDatabase, private http: HttpClient, ) { }

  submitData(value) {
    this.db.list('items').push(value);
  }

  getFormData() {
    return this.http.get('assets/htmlhardcoded/htmlhardcodevalue.json');
  }

}

export interface FeedBack {
  $key: string;
  user_name: string;
  mailID: number;
  mobile_no?: string;
  comments: string;
}
