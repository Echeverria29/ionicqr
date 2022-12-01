import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaprofePage } from './paginaprofe.page';

describe('PaginaprofePage', () => {
  let component: PaginaprofePage;
  let fixture: ComponentFixture<PaginaprofePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaprofePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaprofePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
