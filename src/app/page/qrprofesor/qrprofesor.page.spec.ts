import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrprofesorPage } from './qrprofesor.page';

describe('QrprofesorPage', () => {
  let component: QrprofesorPage;
  let fixture: ComponentFixture<QrprofesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrprofesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
