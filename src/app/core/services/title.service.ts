import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TitleInterface } from '../models/interfaces/title.interface';

@Injectable()
export class TitleService {
  private titleSubject = new Subject<TitleInterface>();
  private titleObservable = this.titleSubject.asObservable()

  constructor() { }


  public emmitTitle(title: TitleInterface): void {
    this.titleSubject.next(title)
  }

  public listenTitleEmissions(): Observable<TitleInterface> {
    return this.titleObservable;
  }
}
