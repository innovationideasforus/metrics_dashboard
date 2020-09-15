import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { FunMobile } from './functmobile/funmobile';

@Injectable({
  providedIn: 'root',
})
export class FunmobileService {
  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient
  ) {}

  addFunmobileFunctional(funmobile: FunMobile[]) {
    return this.webService.addFunmobileFunctional(funmobile).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        console.log('Recieved response @FunMobile' + res);
      })
    );
  }
}
