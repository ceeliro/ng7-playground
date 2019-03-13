import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dashboard } from '../../../../server/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {}

  getDashboard(): Observable<any> {
    return of(dashboard);
  }
}
