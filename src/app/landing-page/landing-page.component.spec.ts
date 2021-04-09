import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import {FetchRecordsService } from '../fetch-records.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  
  
  let results = [{
    id:"60426c6573aea54fd73e2732",
    description:'Eiusmod do ea adipisicing non amet minim laborum laboris sint tempor elit minim eiusmod. Fugiat aute occaecat eiusmod laborum deserunt proident eu ex ex culpa eiusmod deserunt Lorem. Ad sint adipisicing dolore nisi. Sint aute proident excepteur tempor in in sunt exercitation anim consequat. Ea pariatur proident et commodo dolor nisi officia enim. Quis et cillum voluptate cillum. Qui id reprehenderit et quis anim nisi aliqua pariatur fugiat pariatur nisi nulla non enim.',
    company: "ISOTRONIC",
    name: "Vance Vargas",
    latitude: -38.64295,
    longitude: -139.179194,
    imageUrl: "https://picsum.photos/800/600",
    tags: [
        "Lorem",
        "sint",
        "consequat",
        "fugiat",
        "qui",
        "non",
        "esse"
    ]
  },
  {
    id:"60426c653126d1a4d975d5e4",
    description:'Eiusmod do ea adipisicing non amet minim laborum laboris sint tempor elit minim eiusmod. Fugiat aute occaecat eiusmod laborum deserunt proident eu ex ex culpa eiusmod deserunt Lorem. Ad sint adipisicing dolore nisi. Sint aute proident excepteur tempor in in sunt exercitation anim consequat. Ea pariatur proident et commodo dolor nisi officia enim. Quis et cillum voluptate cillum. Qui id reprehenderit et quis anim nisi aliqua pariatur fugiat pariatur nisi nulla non enim.',
    company: "XPLOR",
    name: "Mercer Swanson",
    latitude: -38.64295,
    longitude: -139.179194,
    imageUrl: "https://i.picsum.photos/id/1045/800/600.jpg?hmac=KAxVxIUZ6nJ6UUduS2TP2ZHw5OK72u1Q4KwXMAs_O_E",
    tags: [
      "officia",
      "officia",
      "occaecat",
      "amet",
      "incididunt",
      "et",
      "ad"
    ]
  },
  {
    id:"60426c65d456c0e15bc15115",
    description:'Eiusmod do ea adipisicing non amet minim laborum laboris sint tempor elit minim eiusmod. Fugiat aute occaecat eiusmod laborum deserunt proident eu ex ex culpa eiusmod deserunt Lorem. Ad sint adipisicing dolore nisi. Sint aute proident excepteur tempor in in sunt exercitation anim consequat. Ea pariatur proident et commodo dolor nisi officia enim. Quis et cillum voluptate cillum. Qui id reprehenderit et quis anim nisi aliqua pariatur fugiat pariatur nisi nulla non enim.',
    company: "ACRUEX",
    name: "Tyson Fox",
    latitude: -38.64295,
    longitude: -139.179194,
    imageUrl: "https://picsum.photos/800/600",
    tags: [
      "esse",
      "culpa",
      "non",
      "excepteur",
      "consectetur",
      "nisi",
      "in"
    ]
  }
];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatCardModule, MatIconModule],
      declarations: [ LandingPageComponent ],
      providers: [{provide:FetchRecordsService, useValue: {
        getSearchResults: () => of(results)
  }}
]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('search', () => {
    let expected = {};

  beforeEach(() => {
    
  });

  afterEach(() => {
    
  });
    it('executing search by id', () => {
      
      // console.log("assa",component.removeCard({id:"60426c6573aea54fd73e2732"}));
      expect(component.removeCard({id:"60426c6573aea54fd73e2732"})[0].id)
          .toEqual('60426c653126d1a4d975d5e4');
    });
  });

});
