import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosListComponent } from './album-photos-list.component';

describe('AlbumPhotosListComponent', () => {
  let component: AlbumPhotosListComponent;
  let fixture: ComponentFixture<AlbumPhotosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPhotosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
