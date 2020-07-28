import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoEi } from './autoei';
import { AutoeiService } from '../autoei.service';
import { HttpResponse } from '@angular/common/http';
import { from } from 'rxjs';
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
    'calls',
    2,
    'REMARKS'
  );

  constructor(private router: Router, private autoeiService: AutoeiService) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['homepage']);
  }

  onSubmit() {
    this.autoeiService
      .addEiAutomation(this.model)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          // we have logged in successfully
          console.log(res);
          this.router.navigate(['autoei']);
        }
      });
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
