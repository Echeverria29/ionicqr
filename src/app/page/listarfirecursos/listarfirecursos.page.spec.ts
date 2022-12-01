import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarfirecursosPage } from './listarfirecursos.page';

describe('ListarfirecursosPage', () => {
  let component: ListarfirecursosPage;
  let fixture: ComponentFixture<ListarfirecursosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarfirecursosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarfirecursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
