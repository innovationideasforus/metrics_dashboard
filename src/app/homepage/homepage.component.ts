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
  functional: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  selectAutomation(e) {
    this.router.navigate([this.automation]);
  }
  selectFunctional(e) {
    this.router.navigate([this.functional]);
  }
}
