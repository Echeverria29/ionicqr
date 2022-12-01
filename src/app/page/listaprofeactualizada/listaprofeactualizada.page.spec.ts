import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaprofeactualizadaPage } from './listaprofeactualizada.page';

describe('ListaprofeactualizadaPage', () => {
  let component: ListaprofeactualizadaPage;
  let fixture: ComponentFixture<ListaprofeactualizadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaprofeactualizadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaprofeactualizadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
