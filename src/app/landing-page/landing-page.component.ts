import { Component, OnInit, ViewChild } from '@angular/core'; 
import {FetchRecordsService } from '../fetch-records.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  results: any = [];
  displaycards : any = [];
  errorMessage: string= "";
  searchTerm : string="";

  constructor(
    private fetchService: FetchRecordsService,
    private router: Router
    ) { }

  ngOnInit(): void {
   this.fetchService.getSearchResults().subscribe((data)=>this.prepareData(data),
   (error) => {
    console.error('error caught in component',error.error.message)
    this.results = {"error": error.error.message};
    });
  }
  prepareData(response:JSON){
    console.log("response re cived check for error",response);
    this.results=response;
    this.displaycards=response;
  }
  loadDetails(id:any) {
    
    this.router.navigate(['/detail/'+ id]);
  }
  removeEntry(record:any) {
    this.displaycards = this.removeCard(record);
    
  }
  removeCard(record:any) {
    console.log("hkhkhkhkh",this.displaycards,record)
   let temp= this.displaycards.filter(function(emp:any) {
      if (emp.id == record.id) {
          return false;
      }
      return true;
  });
  console.log("return ",temp)
  return temp;
  }
  executeSearch() {
    let search = this.searchTerm;
    let re = '/'+this.searchTerm+'/g';
    let result = this.results.filter(function (entry: { id: string; name: string; company: string; description:string;tags:string[] }) 
    { 
      return entry.id.indexOf(search) !=-1 || 
      entry.name.indexOf(search) !=-1 || 
      entry.company.indexOf(search) !=-1 || 
      entry.description.indexOf(search) !=-1 ||
      entry.tags.indexOf(search) !=-1
  }
    );
    if(this.searchTerm==""){
      this.displaycards = this.results;
    }
    else {
      this.displaycards = result;
    }
  }
}
