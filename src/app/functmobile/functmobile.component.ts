import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunMobile } from './funmobile';
import { FunmobileService } from '../funmobile.service';
import { HttpResponse } from '@angular/common/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-functmobile',
  templateUrl: './functmobile.component.html',
  styleUrls: ['./functmobile.component.css'],
})
export class FunctmobileComponent implements OnInit {
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

  otherProjects = [
    'Wellness Release 3',
    'Wellness Release 4',
    'Q3 2020',
    '  Online Doctor Phase 1',
    '    Online Doctor Phase 2',
    '    Online Doctor Phase 3',
    '    Online Doctor Phase 4',
  ];
  otherAssigned = [
    'Vasanth',
    'Chakrapani',
    'Ninobertina',
    'Sangeetha',
    'Sindiya',
  ];
  model: FunMobile = new FunMobile(
    '2020-07-27',
    'Q3 2020',
    'Vasanth',
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
  constructor(
    private router: Router,
    private funmobileService: FunmobileService
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['homepage']);
  }

  onSubmit() {
    this.funmobileService
      .addFunmobileFunctional(this.model)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          // we have logged in successfully
          console.log(res);
          this.router.navigate(['homepage']);
        }
      });
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
