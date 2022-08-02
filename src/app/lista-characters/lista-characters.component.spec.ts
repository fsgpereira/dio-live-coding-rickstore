import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCharactersComponent } from './lista-characters.component';

describe('ListaCharactersComponent', () => {
  let component: ListaCharactersComponent;
  let fixture: ComponentFixture<ListaCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
