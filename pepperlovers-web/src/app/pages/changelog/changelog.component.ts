import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
})
export class ChangelogComponent implements OnInit {
  data = [
    {
      author: '/u/Jabanero',
      avatar: '/assets/pepper-lovers-logo.png',
      content: 'Updates were made for menu items',
      datetime: 'Jan 15, 2022',
    },
    {
      author: '/u/Jabanero',
      avatar: '/assets/pepper-lovers-logo.png',
      content: 'Initial site was created',
      datetime: 'Jan 14, 2022',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
