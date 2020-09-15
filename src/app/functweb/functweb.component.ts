import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunWeb } from './funweb';
import { FunwebService } from '../funweb.service';
import { HttpResponse } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-functweb',
  templateUrl: './functweb.component.html',
  styleUrls: ['./functweb.component.css'],
})
export class FunctwebComponent implements OnInit {
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
  model: FunWeb = new FunWeb(
    '2020-07-27',
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

  funWebItems:FunWeb[] = [];
  constructor(private router: Router, private funwebService: FunwebService) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['homepage']);
  }
 
  onSubmit() {
    this.funwebService
      .addFunwebFunctional(this.funWebItems)
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

  addFunWeb(modObj){
    console.log("Model Here is:"+JSON.stringify(modObj));
    
    this.funWebItems.push({...modObj});
    console.log("Array Item is:"+JSON.stringify(this.funWebItems));
    return false;
  }

  removeFunWeb(index: number) {
    if (this.funWebItems.length > 0) {
      this.funWebItems.splice(index, 1);
    }
    return false;
  }
}
