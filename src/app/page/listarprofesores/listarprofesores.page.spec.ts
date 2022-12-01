import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarprofesoresPage } from './listarprofesores.page';

describe('ListarprofesoresPage', () => {
  let component: ListarprofesoresPage;
  let fixture: ComponentFixture<ListarprofesoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarprofesoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarprofesoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
