import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoClaims } from './autoclaims';
import { AutoclaimsService } from '../autoclaims.service';
import { HttpResponse } from '@angular/common/http';
import { from } from 'rxjs';
import { newArray } from '@angular/compiler/src/util';
@Component({
  selector: 'app-auto-claimsauto',
  templateUrl: './auto-claimsauto.component.html',
  styleUrls: ['./auto-claimsauto.component.css'],
})
export class AutoClaimsautoComponent implements OnInit {
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
  otherProjects = ['QTP', 'CTA'];

  model: AutoClaims = new AutoClaims(
    'Name',
    '2020-07-27',
    'Release 1',
    'QTP',
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
    'REMARKS'
  );
autoClaimsAutoItems:AutoClaims[] = [];
  constructor(
    private router: Router,
    private autoclaimsService: AutoclaimsService
  ) {}
  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['homepage']);
  }

  
  onSubmit() {
    this.autoclaimsService
      .addClaimsAutomation(this.autoClaimsAutoItems)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          console.log("Here status code is 200!");
          this.router.navigateByUrl('/homepage', { skipLocationChange: true }).then(() => {
            this.router.navigate(['claimsauto']);
        });
        }
      });
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  addClaimsAuto(modObj){
    console.log("Model Here is:"+JSON.stringify(modObj));
    
    this.autoClaimsAutoItems.push({...modObj});
    console.log("Array Item is:"+JSON.stringify(this.autoClaimsAutoItems));
    return false;
  }

  removeClaimsAuto(index: number) {
    if (this.autoClaimsAutoItems.length > 0) {
      this.autoClaimsAutoItems.splice(index, 1);
    }
    return false;
  }

 
}
