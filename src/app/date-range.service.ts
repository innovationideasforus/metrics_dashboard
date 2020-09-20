import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { DateRange } from './date-range/date-range';

@Injectable({
  providedIn: 'root'
})
export class DateRangeService {

  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient
  ) { }

  generateReport(dateRange: DateRange) {
    return this.webService.generateReport(dateRange).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        console.log('Recieved response @dateRange' + res);
      })
    );  

}

}
