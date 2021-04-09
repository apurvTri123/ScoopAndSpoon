import { TestBed } from '@angular/core/testing';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FetchRecordsService } from './fetch-records.service';
import { RouterModule, Router } from "@angular/router";

describe('FetchRecordsService', () => {
  let service: FetchRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchRecordsService]
    });
    
    service = TestBed.inject(FetchRecordsService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
