import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReprobadosprofePage } from './reprobadosprofe.page';

describe('ReprobadosprofePage', () => {
  let component: ReprobadosprofePage;
  let fixture: ComponentFixture<ReprobadosprofePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprobadosprofePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReprobadosprofePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
