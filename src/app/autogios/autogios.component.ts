import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoGios } from './autogios';
import {AutogiosService} from '../autogios.service';
import { HttpResponse } from '@angular/common/http'
import { from } from 'rxjs';
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
  model:AutoGios = new AutoGios("2020-07-27",1,2,3,4,5,"Calls");
 
  constructor(private router: Router, private autogiosService: AutogiosService) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['homepage']);
  }

  addAutoGios(){
    let autogios = this.model;
    console.log("AutoGios"+ autogios);
  }

  onSubmit(){
    this.autogiosService
      .addGiosAutomation(this.model)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          // we have logged in successfully
          console.log(res);
          this.router.navigate(['autogios']);
        }
        
      });
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
