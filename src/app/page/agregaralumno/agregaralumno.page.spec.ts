import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregaralumnoPage } from './agregaralumno.page';

describe('AgregaralumnoPage', () => {
  let component: AgregaralumnoPage;
  let fixture: ComponentFixture<AgregaralumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaralumnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregaralumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
