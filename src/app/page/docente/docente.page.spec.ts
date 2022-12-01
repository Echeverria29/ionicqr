import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocentePage } from './docente.page';


describe('DocentePage', () => {
  let component: DocentePage;
  let fixture: ComponentFixture<DocentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
