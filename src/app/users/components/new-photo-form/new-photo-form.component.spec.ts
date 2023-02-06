import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPhotoFormComponent } from './new-photo-form.component';

describe('NewPictureFormComponent', () => {
  let component: NewPictureFormComponent;
  let fixture: ComponentFixture<NewPhotoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewPhotoFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewPhotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
