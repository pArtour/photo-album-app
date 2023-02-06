import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from 'src/app/core/models/photo.model';

@Component({
  selector: 'app-album-photos-list',
  templateUrl: './album-photos-list.component.html',
  styleUrls: ['./album-photos-list.component.css'],
})
export class AlbumPhotosListComponent {
  @Input() public photos: Photo[] = [];
  @Output() public deleteButtonClick = new EventEmitter<Photo>();
  
  public trackById(index: number, photo: Photo): number {
    return photo.id;
  }

  public onDeleteButtonClick(photo: Photo) {
    this.deleteButtonClick.emit(photo);
  }
}
