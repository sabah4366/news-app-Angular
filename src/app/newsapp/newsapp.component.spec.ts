import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsappComponent } from './newsapp.component';

describe('NewsappComponent', () => {
  let component: NewsappComponent;
  let fixture: ComponentFixture<NewsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
