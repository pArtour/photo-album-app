import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumNewPhotoFormComponent } from './album-new-photo-form.component';

describe('AlbumNewPhotoFormComponent', () => {
  let component: AlbumNewPhotoFormComponent;
  let fixture: ComponentFixture<AlbumNewPhotoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumNewPhotoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumNewPhotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
