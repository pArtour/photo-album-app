import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumActionButtonsComponent } from './album-action-buttons.component';

describe('AlbumActionButtonsComponent', () => {
  let component: AlbumActionButtonsComponent;
  let fixture: ComponentFixture<AlbumActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumActionButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
