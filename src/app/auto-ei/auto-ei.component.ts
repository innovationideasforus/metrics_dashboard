import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoEi } from './autoei';
import { AutoeiService } from '../autoei.service';
import { HttpResponse } from '@angular/common/http';
import { from } from 'rxjs';
import { newArray } from '@angular/compiler/src/util';
@Component({
  selector: 'app-auto-ei',
  templateUrl: './auto-ei.component.html',
  styleUrls: ['./auto-ei.component.css'],
})
export class AutoeiComponent implements OnInit {
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
  model: AutoEi = new AutoEi(
    '2020-07-27',
    1,
    1,
    1,
    1,
    1,
    1,
    'Calls',
    2,
    'REMARKS'
  );
  autoEiAutoItems:AutoEi[] = [];

  constructor(private router: Router, private autoeiService: AutoeiService) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['homepage']);
  }

  onSubmit() {
    this.autoeiService
      .addEiAutomation(this.autoEiAutoItems)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          console.log("Here status code is 200!");
          this.router.navigateByUrl('/homepage', { skipLocationChange: true }).then(() => {
            this.router.navigate(['auto-ei']);
        });
        }
      });
  }
            
  addEiAuto(modObj){
    console.log("Model Here is:"+JSON.stringify(modObj));
    
    this.autoEiAutoItems.push({...modObj});
    console.log("Array Item is:"+JSON.stringify(this.autoEiAutoItems));
    return false;
  }

  removeEiAuto(index: number) {
    if (this.autoEiAutoItems.length > 0) {
      this.autoEiAutoItems.splice(index, 1);
    }
    return false;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
