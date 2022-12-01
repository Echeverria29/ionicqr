import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsistenciaalumnoPage } from './asistenciaalumno.page';

describe('AsistenciaalumnoPage', () => {
  let component: AsistenciaalumnoPage;
  let fixture: ComponentFixture<AsistenciaalumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenciaalumnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsistenciaalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
