import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css'],
})
export class LearningComponent implements OnInit {
  newPost = '';

  onAddPost() {
    this.newPost = "The user's post";
  }
  constructor() {}

  ngOnInit(): void {}
}
