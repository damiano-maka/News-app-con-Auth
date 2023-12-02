import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSalvateComponent } from './news-salvate.component';

describe('NewsSalvateComponent', () => {
  let component: NewsSalvateComponent;
  let fixture: ComponentFixture<NewsSalvateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsSalvateComponent]
    });
    fixture = TestBed.createComponent(NewsSalvateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
