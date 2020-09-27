import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Router } from '@angular/router';
import { DateRangeService } from '../date-range.service';
import { DateRange } from './date-range';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {

  reportTypes = [
    {
      value: 'autogios',
      label: 'GIOS',
    },
    {
      value: 'auto-ei',
      label: 'EI',
    },
    {
      value: 'claimsauto',
      label: 'CLAIMS AUTOMATION',
    },
    {
      value: 'funclaims',
      label: 'FUNCTIONAL-CLAIMS',
    },

  ];

  model: DateRange = new DateRange('autogios','2020-07-27','2020-08-20');
  keys:String[];
  resObj: Object[];
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  constructor(private router: Router,
    private dateRangeService: DateRangeService) { }

  ngOnInit(): void {
  }

  
  cancel() {
    this.router.navigate(['homepage']);
  }

  onSubmit() {
    this.keys=[];
    this.resObj=[];
    console.log("Model valu here is "+this.model);

    this.dateRangeService
    .generateReport(this.model)
    .subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        console.log("Here status code is 200! Got Successful response for generateReport");
        if(res.body && res.body.length > 0){
          let body = res.body;
          this.keys = Object.keys(res.body[0]);
         this.resObj = res.body;
         console.log("Operation Completed");
        }
      //   this.router.navigateByUrl('/homepage', { skipLocationChange: true }).then(() => {
      //     this.router.navigate(['autogios']);
      // });
      }
    });
    
  }


}
