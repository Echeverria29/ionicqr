import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarprofePage } from './agregarprofe.page';

describe('AgregarprofePage', () => {
  let component: AgregarprofePage;
  let fixture: ComponentFixture<AgregarprofePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarprofePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarprofePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
