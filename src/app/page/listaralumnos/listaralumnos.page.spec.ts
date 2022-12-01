import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaralumnosPage } from './listaralumnos.page';

describe('ListaralumnosPage', () => {
  let component: ListaralumnosPage;
  let fixture: ComponentFixture<ListaralumnosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaralumnosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaralumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
