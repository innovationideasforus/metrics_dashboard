import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { AutoGios } from './autogios/autogios';

@Injectable({
  providedIn: 'root',
})
export class AutogiosService {
  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient
  ) {}

  addGiosAutomation(autogios: AutoGios[]) {
    return this.webService.addGiosAutomation(autogios).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        console.log('Recieved response @AutoGios' + res);
      })
    );
  }
}
