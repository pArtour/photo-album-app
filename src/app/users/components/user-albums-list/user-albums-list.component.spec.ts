import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlbumsListComponent } from './user-albums-list.component';

describe('UserAlbumsListComponent', () => {
  let component: UserAlbumsListComponent;
  let fixture: ComponentFixture<UserAlbumsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAlbumsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAlbumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
