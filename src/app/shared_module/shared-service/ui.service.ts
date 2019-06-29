import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UiHeaderText } from '../ui/ui-model';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  activeSection: boolean = true;

  constructor(private _http: HttpClient) { }

   setUI(value) {
     this.activeSection = value;
  }

  getHeaderName() {
    return this._http.get<UiHeaderText[]>('./assets/jsonData/header-data.json');
  }

}
