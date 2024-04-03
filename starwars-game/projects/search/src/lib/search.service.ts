import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchItem } from './models/searchitem';

@Injectable({
  providedIn: 'root', // c'est un singleton !!
})
export class SearchService {
  private readonly store = new BehaviorSubject<SearchItem>({value: ''});

  asObservable(): Observable<SearchItem> {
    return this.store.asObservable();
  }

  search(value: string): void {
    this.store.next({ value });
  }
}
