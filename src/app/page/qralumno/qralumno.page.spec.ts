import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QralumnoPage } from './qralumno.page';

describe('QralumnoPage', () => {
  let component: QralumnoPage;
  let fixture: ComponentFixture<QralumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QralumnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QralumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
