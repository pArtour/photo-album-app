import { Photo } from './../../../core/models/photo.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Album } from 'src/app/core/models/album.model';

@Component({
  selector: 'app-new-photo-form',
  templateUrl: './new-photo-form.component.html',
  styleUrls: ['./new-photo-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPhotoFormComponent {
  @Input() public albums: Album[] = [];
  @Output() public formSubmit = new EventEmitter<Partial<Photo>>();

  public photoForm = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    albumId: new FormControl(0, {
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
