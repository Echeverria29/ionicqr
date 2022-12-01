import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaalumnoPage } from './paginaalumno.page';

describe('PaginaalumnoPage', () => {
  let component: PaginaalumnoPage;
  let fixture: ComponentFixture<PaginaalumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaalumnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
