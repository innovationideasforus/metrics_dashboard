import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoGios } from './autogios';
import { AutogiosService } from '../autogios.service';
import { HttpResponse } from '@angular/common/http';
import { from } from 'rxjs';
import { newArray } from '@angular/compiler/src/util';
@Component({
  selector: 'app-autogios',
  templateUrl: './autogios.component.html',
  styleUrls: ['./autogios.component.css'],
})
export class AutogiosComponent implements OnInit {
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
  model: AutoGios = new AutoGios('2020-07-27', 1, 2, 3, 4,'Calls',5,'Remraks');
  autoGiosItems:AutoGios[] = [];

  constructor(
    private router: Router,
    private autogiosService: AutogiosService
  ) {}

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['homepage']);
  }

  onSubmit() {
    this.autogiosService
      .addGiosAutomation(this.autoGiosItems)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          console.log("Here status code is 200!");
          this.router.navigateByUrl('/homepage', { skipLocationChange: true }).then(() => {
            this.router.navigate(['autogios']);
        });
        }
      });
  }

  addGios(modObj){
    console.log("Model Here is:"+JSON.stringify(modObj));
    
    this.autoGiosItems.push({...modObj});
    console.log("Array Item is:"+JSON.stringify(this.autoGiosItems));
    return false;
  }

  removeGios(index: number) {
    if (this.autoGiosItems.length > 0) {
      this.autoGiosItems.splice(index, 1);
    }
    return false;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
