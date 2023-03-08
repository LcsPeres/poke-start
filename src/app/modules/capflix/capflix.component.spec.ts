import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapflixComponent } from './capflix.component';

describe('CapflixComponent', () => {
  let component: CapflixComponent;
  let fixture: ComponentFixture<CapflixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapflixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
