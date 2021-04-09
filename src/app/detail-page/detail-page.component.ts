import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FetchRecordsService } from '../fetch-records.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  details: any = {};
  tags: string[] = [];
  
  // tags : any = [];
  constructor(
    private route: ActivatedRoute,
    private fetchService: FetchRecordsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPageData()
  }

  getPageData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("Id recieved : ",id);
    this.fetchService.getDetailPage("60426c6516bcee29702040fc").subscribe(data=>this.cleanData(data));
  }
  cleanData(response:JSON): void {
    this.details=response;
    this.tags=this.details.tags;
  }
  
  goBack(): void{
    this.location.back();
  }

}
