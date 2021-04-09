import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPageComponent } from './detail-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Router } from "@angular/router";

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let route: ActivatedRoute;
  let fixture: ComponentFixture<DetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPageComponent ],
      imports: [HttpClientModule, MatCardModule, RouterModule.forRoot([])],
      providers: [
        {provide: ActivatedRoute, useValue: {
            params: of({id: "60426c6573aea54fd73e2732"})
          }}
        
      ]   
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
