import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomepageComponent } from './page-homepage.component';

describe('PageHomepageComponent', () => {
  let component: PageHomepageComponent;
  let fixture: ComponentFixture<PageHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
