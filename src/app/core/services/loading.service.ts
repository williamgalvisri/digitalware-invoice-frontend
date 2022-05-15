import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingService {
  private loadingSubject = new Subject<boolean>()
  private loadingObservable$ = this.loadingSubject.asObservable()
  constructor() { }

  onListenLoading() {
    return this.loadingObservable$;
  }

  emitLoading(isLoading: boolean) {
    this.loadingSubject.next(isLoading)
  }
}
