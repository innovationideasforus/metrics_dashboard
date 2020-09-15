import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { FunCusComms } from './functcuscomms/funcuscomms';

@Injectable({
  providedIn: 'root',
})
export class FuncuscommsService {
  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient
  ) {}

  addFuncuscommsFunctional(funcuscomms: FunCusComms[]) {
    return this.webService.addFuncuscommsFunctional(funcuscomms).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        console.log('Recieved response @FunCusComms' + res);
      })
    );
  }
}
