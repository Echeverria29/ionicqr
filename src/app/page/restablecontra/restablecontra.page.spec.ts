import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestablecontraPage } from './restablecontra.page';

describe('RestablecontraPage', () => {
  let component: RestablecontraPage;
  let fixture: ComponentFixture<RestablecontraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestablecontraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestablecontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
