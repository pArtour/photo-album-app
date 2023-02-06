import { FormControl, Validators } from '@angular/forms';
import { Album } from './../../../core/models/album.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-album-update-form',
  templateUrl: './album-update-form.component.html',
  styleUrls: ['./album-update-form.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumUpdateFormComponent implements OnInit {
  @Input() public album: Album | null = null;
  @Output() public updateButtonClick = new EventEmitter<string>();

  public titleControl = new FormControl('', {
    validators: [Validators.required]
  })

  public onUpdateButtonClick() {
    if (this.titleControl.valid && this.titleControl.value) {
      this.updateButtonClick.emit(this.titleControl.value);
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.titleControl.setValue(this.album?.title || '');
  }

}
