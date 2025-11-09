import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contacpage } from './contacpage';

describe('Contacpage', () => {
  let component: Contacpage;
  let fixture: ComponentFixture<Contacpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contacpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
