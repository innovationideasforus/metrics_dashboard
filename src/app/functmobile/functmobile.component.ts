import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  cancel() {
    this.router.navigate(['homepage']);
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
