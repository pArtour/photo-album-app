import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumUpdateFormComponent } from './album-update-form.component';

describe('AlbumUpdateFormComponent', () => {
  let component: AlbumUpdateFormComponent;
  let fixture: ComponentFixture<AlbumUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
