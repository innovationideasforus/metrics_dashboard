import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  otherProjects = ['Data Retention Drop 3', 'Claims Integra'];
  otherModules = ['IAS', 'Softco', 'PVS', 'Myvhi', 'PCCS'];
  otherRelease = ['Release 1', 'Release 2', 'Release 3'];
  otherAssigned = ['Geetha'];
  cancel() {
    this.router.navigate(['homepage']);
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
