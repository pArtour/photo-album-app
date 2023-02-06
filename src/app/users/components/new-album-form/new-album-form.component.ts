import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-album-form',
  templateUrl: './new-album-form.component.html',
  styleUrls: ['./new-album-form.component.css'],
})
export class NewAlbumFormComponent {
  @Output() public formSubmit = new EventEmitter<Partial<{title: string}>>();

  public albumForm = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      nonNullable: true,
    }),
  });

  public onSubmit() {
    if (this.albumForm.valid) {
      this.formSubmit.emit(this.albumForm.value);
    }
  }
}
