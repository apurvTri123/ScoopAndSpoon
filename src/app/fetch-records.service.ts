import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchRecordsService {

  constructor(
    private http: HttpClient
    
  ) { }
  getSearchResults(): Observable<any> {
    let url : string = "https://scoopandspoon.marketing/recruiting-api/contents";
    return this.http.get(url).pipe(map(data => data));
  }
  getDetailPage(id:string): Observable<any> {
    let url : string = "https://scoopandspoon.marketing/recruiting-api/contents/"+id;
    return this.http.get(url).pipe(map(data => data));
  }
}
