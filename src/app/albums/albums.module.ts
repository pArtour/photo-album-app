import { AlbumsService } from 'src/app/albums/services/albums.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsDetailComponent } from './pages/albums-detail/albums-detail.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumPhotosListComponent } from './components/album-photos-list/album-photos-list.component';
import { AlbumUpdateFormComponent } from './components/album-update-form/album-update-form.component';
import { AlbumActionButtonsComponent } from './components/album-action-buttons/album-action-buttons.component';
import { SharedPipesModule } from '../shared/pipes/shared-pipes/shared-pipes.module';
import { PhotosService } from '../core/services/photos/photos.service';
import { AlbumNewPhotoFormComponent } from './components/album-new-photo-form/album-new-photo-form.component';




@NgModule({
  declarations: [
    AlbumsDetailComponent,
    AlbumPhotosListComponent,
    AlbumUpdateFormComponent,
    AlbumActionButtonsComponent,
    AlbumNewPhotoFormComponent,
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedPipesModule,
  ],
  providers: [AlbumsService, PhotosService],
})
export class AlbumsModule {}
