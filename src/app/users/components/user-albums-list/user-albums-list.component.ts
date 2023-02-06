import { Component, Input } from '@angular/core';
import { Album } from 'src/app/core/models/album.model';

@Component({
  selector: 'app-user-albums-list',
  templateUrl: './user-albums-list.component.html',
  styleUrls: ['./user-albums-list.component.css'],
})
export class UserAlbumsListComponent {
  @Input() albums: Album[] = [];

  public trackById(index: number, item: Album): number {
    return item.id;
  }
}
