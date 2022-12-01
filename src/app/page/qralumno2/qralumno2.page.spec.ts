import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qralumno2Page } from './qralumno2.page';

describe('Qralumno2Page', () => {
  let component: Qralumno2Page;
  let fixture: ComponentFixture<Qralumno2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qralumno2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qralumno2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
