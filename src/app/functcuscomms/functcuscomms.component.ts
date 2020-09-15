import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunCusComms } from './funcuscomms';
import { FuncuscommsService } from '../funcuscomms.service';
import { HttpResponse } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-functcuscomms',
  templateUrl: './functcuscomms.component.html',
  styleUrls: ['./functcuscomms.component.css'],
})
export class FunctcuscommsComponent implements OnInit {
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
  otherProjects = ['BAU', 'EE', 'GIOS Controls'];
  otherAssigned = ['Saravanan', 'Dhrubo', 'Sathish'];
  model: FunCusComms = new FunCusComms(
    '2020-07-27',
    'BAU',
    'Dhrubo',
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

  funCusCommsItems:FunCusComms[] = [];
  constructor(
    private router: Router,
    private funcuscommsService: FuncuscommsService
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['homepage']);
  }

  onSubmit() {
    this.funcuscommsService
      .addFuncuscommsFunctional(this.funCusCommsItems)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          console.log("Here status code is 200!");
          this.router.navigateByUrl('/homepage', { skipLocationChange: true }).then(() => {
            this.router.navigate(['functcuscomms']);
        });
      }
      });
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  addFunCusComms(modObj){
    console.log("Model Here is:"+JSON.stringify(modObj));
    
    this.funCusCommsItems.push({...modObj});
    console.log("Array Item is:"+JSON.stringify(this.funCusCommsItems));
    return false;
  }

  removeFunCusComms(index: number) {
    if (this.funCusCommsItems.length > 0) {
      this.funCusCommsItems.splice(index, 1);
    }
    return false;
  }

}
