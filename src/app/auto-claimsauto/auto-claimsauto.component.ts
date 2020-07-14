import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  cancel() {
    this.router.navigate(['homepage']);
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
