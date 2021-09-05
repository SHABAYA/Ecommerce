import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subject = new Subject()
  constructor() { }

  public setData(data: any) {
    this.subject.next(data)
  }

  public getData(): Observable<any> {
    return this.subject.asObservable();
  }
}
