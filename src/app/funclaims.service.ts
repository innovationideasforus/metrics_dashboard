import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { FunClaims } from './functclaims/funclaims';

@Injectable({
  providedIn: 'root',
})
export class FunclaimsService {
  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient
  ) {}

  addFunclaimsFunctional(funclaims: FunClaims[]) {
    return this.webService.addFunclaimsFunctional(funclaims).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        console.log('Recieved response @FunClaims' + res);
      })
    );
  }
}
