import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user-action-buttons',
  templateUrl: './user-action-buttons.component.html',
  styleUrls: ['./user-action-buttons.component.css'],
})
export class UserActionButtonsComponent {
  @Input() public createAlbumFormShown = false;
  @Input() public createPhotoFormShown = false;

  @Output() public createAlbumButtonClick = new EventEmitter<void>();
  @Output() public createPhotoButtonClick = new EventEmitter<void>();

  @Output() public cancelAlbumCreateButtonClick = new EventEmitter<void>();
  @Output() public cancelPhotoCreateButtonClick = new EventEmitter<void>();

  public onCreateAlbumButtonClick(): void {
    this.createAlbumButtonClick.emit();
  }

  public onCreatePhotoButtonClick(): void {
    this.createPhotoButtonClick.emit();
  }

  public onCancelAlbumCreateButtonClick(): void {
    this.cancelAlbumCreateButtonClick.emit();
  }

  public onCancelPhotoCreateButtonClick(): void {
    this.cancelPhotoCreateButtonClick.emit();
  }
}
