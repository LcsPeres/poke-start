import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCapflixComponent } from './botao-capflix.component';

describe('BotaoCapflixComponent', () => {
  let component: BotaoCapflixComponent;
  let fixture: ComponentFixture<BotaoCapflixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoCapflixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoCapflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
