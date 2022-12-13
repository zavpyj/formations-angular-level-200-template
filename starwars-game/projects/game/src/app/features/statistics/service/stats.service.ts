import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StatsDatalayerService } from './stats-datalayer.service';

export type Statistic = {
}

export interface IGetAllStats {
  getAll(): Observable<Statistic[]>;
}

@Injectable({
  providedIn: null
})
export class StatsService implements IGetAllStats {

  constructor(private readonly dataLayer: StatsDatalayerService) { }

  getAll(): Observable<Statistic[]> {
    return this.dataLayer.getAll();
  }
}
