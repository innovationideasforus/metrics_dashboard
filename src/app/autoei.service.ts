import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { AutoEi } from './auto-ei/autoei';

@Injectable({
  providedIn: 'root',
})
export class AutoeiService {
  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient
  ) {}

  addEiAutomation(autoei: AutoEi) {
    return this.webService.addEiAutomation(autoei).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        console.log('Recieved response @AutoEi' + res);
      })
    );
  }
}
