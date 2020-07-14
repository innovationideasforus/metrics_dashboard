import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  cancel() {
    this.router.navigate(['homepage']);
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
