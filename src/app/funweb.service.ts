import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { FunWeb } from './functweb/funweb';

@Injectable({
  providedIn: 'root',
})
export class FunwebService {
  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient
  ) {}

  addFunwebFunctional(funweb: FunWeb[]) {
    return this.webService.addFunwebFunctional(funweb).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        console.log('Recieved response @FunWeb' + res);
      })
    );
  }
}
