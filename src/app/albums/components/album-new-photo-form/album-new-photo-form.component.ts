import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Photo } from 'src/app/core/models/photo.model';

@Component({
  selector: 'app-album-new-photo-form',
  templateUrl: './album-new-photo-form.component.html',
  styleUrls: ['./album-new-photo-form.component.css'],
})
export class AlbumNewPhotoFormComponent {
  @Output() public formSubmit = new EventEmitter<Partial<Photo>>();

  public photoForm = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    url: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    thumbnailUrl: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  public onSubmit() {
    if (this.photoForm.valid) {
      this.formSubmit.emit(this.photoForm.value);
      this.photoForm.reset();
    }
  }
}
