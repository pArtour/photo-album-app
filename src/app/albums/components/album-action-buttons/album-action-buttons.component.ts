import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-album-action-buttons',
  templateUrl: './album-action-buttons.component.html',
  styleUrls: ['./album-action-buttons.component.css'],
})
export class AlbumActionButtonsComponent {
  @Input() public showUpdateButton: boolean = false;
  @Input() public showCreatePhotoButton: boolean = false;

  @Output() public updateButtonClick = new EventEmitter<void>();
  @Output() public deleteButtonClick = new EventEmitter<void>();
  @Output() public cancelUpdateButtonClick = new EventEmitter<void>();
  @Output() public cancelCreatePhotoButtonClick = new EventEmitter<void>();
  @Output() public createPhotoButtonClick = new EventEmitter<void>();

  public onUpdateButtonClick() {
    this.updateButtonClick.emit();
  }

  public onDeleteButtonClick() {
    this.deleteButtonClick.emit();
  }

  public onCancelUpdateButtonClick() {
    this.cancelUpdateButtonClick.emit();
  }

  public onCreatePhotoButtonClick() {
    this.createPhotoButtonClick.emit();
  }

  public onCancelCreatePhotoButtonClick() {
    this.cancelCreatePhotoButtonClick.emit();
  }
}
