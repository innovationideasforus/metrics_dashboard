import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunClaims } from './funclaims';
import { FunclaimsService } from '../funclaims.service';
import { HttpResponse } from '@angular/common/http';
import { from } from 'rxjs';
import { newArray } from '@angular/compiler/src/util';
@Component({
  selector: 'app-functclaims',
  templateUrl: './functclaims.component.html',
  styleUrls: ['./functclaims.component.css'],
})
export class FunctclaimsComponent implements OnInit {
  otherTasks = [
    'Calls',
    'Meetings',
    'KT',
    'Daily Stand Up Automation',
    'Daily Stand Up Offshore',
    'Environment Refresh',
    'Daily Stand Up Functional ',
    'Clarification',
    'Suite Refresh',
    'Requirement walkthrough',
    'Preparation of KT documents',
    'Peer Review of Test cases',
    'Test data preparation',
    'Environmental readiness check',
    'Defect discussion',
    'Defect Fix Testing support',
    'Claims Master Regression pack',
    'Environment Restart',
    'Batch run',
    'Understanding of baseline documents',
    'Requirement mapping',
    'Effort estimation',
    'Coordination with the onsite team',
    'Data Preparation',
  ];
  otherProjects = ['Data Retention', 'Claims Integra'];
  otherModules = ['IAS', 'Softco', 'PVS', 'Myvhi', 'PCCS'];
  otherRelease = ['Release 1', 'Release 2', 'Release 3'];
  otherAssigned = ['Geetha'];
  
  model: FunClaims = new FunClaims(
    '2020-07-27',
    'Data Retention',
    'IAS',
    'Release 1',
    'Geetha',
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    'Calls',
    1,
    'test'
  );

  funClaimsItems:FunClaims[] = [];
  constructor(
    private router: Router,
    private funclaimsService: FunclaimsService
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['homepage']);
  }

  onSubmit() {
    this.funclaimsService
      .addFunclaimsFunctional(this.funClaimsItems)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          console.log("Here status code is 200!");
          this.router.navigateByUrl('/homepage', { skipLocationChange: true }).then(() => {
            this.router.navigate(['functclaims']);
        });
        }
      });
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  addFunClaims(modObj){
    console.log("Model Here is:"+JSON.stringify(modObj));
    
    this.funClaimsItems.push({...modObj});
    console.log("Array Item is:"+JSON.stringify(this.funClaimsItems));
    return false;
  }

  removeFunClaims(index: number) {
    if (this.funClaimsItems.length > 0) {
      this.funClaimsItems.splice(index, 1);
    }
    return false;
  }

}
