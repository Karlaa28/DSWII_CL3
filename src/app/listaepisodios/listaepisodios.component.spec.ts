import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaepisodiosComponent } from './listaepisodios.component';

describe('ListaepisodiosComponent', () => {
  let component: ListaepisodiosComponent;
  let fixture: ComponentFixture<ListaepisodiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaepisodiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaepisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
