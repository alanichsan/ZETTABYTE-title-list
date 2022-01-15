import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TITLELISTS } from "../mock-title-list";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  listTitles = TITLELISTS;

  constructor(private httpClient: HttpClient) {}
  ngOnInit(){
  }
}
