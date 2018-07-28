import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMapleSyrupComponent } from './favorite-maple-syrup.component';

describe('FavoriteMapleSyrupComponent', () => {
  let component: FavoriteMapleSyrupComponent;
  let fixture: ComponentFixture<FavoriteMapleSyrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteMapleSyrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteMapleSyrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
