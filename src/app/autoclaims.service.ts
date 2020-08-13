import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { AutoClaims } from './auto-claimsauto/autoclaims';

@Injectable({
  providedIn: 'root',
})
export class AutoclaimsService {
  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient
  ) {}

  addClaimsAutomation(autoclaims: AutoClaims[]) {
    return this.webService.addClaimsAutomation(autoclaims).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        console.log('Recieved response @AutoClaims' + res);
      })
    );
  }
}
