import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-external',
  templateUrl: './banner-external.component.html',
  styleUrls: ['./banner-external.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Test Tour of Heroes';
}


