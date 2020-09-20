import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  automationOptions = [
    {
      value: 'autogios',
      label: 'GIOS',
    },
    {
      value: 'auto-ei',
      label: 'EI',
    },
    {
      value: 'claimsauto',
      label: 'CLAIMS AUTOMATION',
    },
  ];
  automation: any;

  functionalOptions = [
    {
      value: 'functclaims',
      label: 'CLAIMS',
    },
    {
      value: 'functcuscomms',
      label: 'CUSCOMMS',
    },
    {
      value: 'functmobile',
      label: 'MOBILE',
    },
    {
      value: 'functweb',
      label: 'WEB',
    },
  ];

  reportTypes = [
    {
      value: '',
      label: 'Select Report period',
    },
    {
      value: 'weekly',
      label: 'Weekly Report',
    },
    {
      value: 'defect',
      label: 'Defect Reports',
    },
    {
      value: 'monthly',
      label: 'Monthly Reports',
    },
    {
      value: 'daterange',
      label: 'Date range',
    }
  ]

  functional: any;
  reportType:any = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogoutButtonClicked() {
    this.router.navigate(['loginpage']);
  }
  selectAutomation(e) {
    this.router.navigate([this.automation]);
  }
  selectFunctional(e) {
    this.router.navigate([this.functional]);
  }
  navigateReport(){
    console.log("Report Value generated"+this.reportType);
    this.router.navigate([this.reportType]);
  }
}
