import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarcursoPage } from './agregarcurso.page';

describe('AgregarcursoPage', () => {
  let component: AgregarcursoPage;
  let fixture: ComponentFixture<AgregarcursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarcursoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarcursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
