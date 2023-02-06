import { MetricsService } from '../../../core/services/metrics/metrics.service';
import { LogsService } from '../../../core/services/logs/logs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from './../../../core/models/photo.model';
import { Album } from './../../../core/models/album.model';
import { AlbumsService } from 'src/app/albums/services/albums.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PhotosService } from 'src/app/core/services/photos/photos.service';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css'],
})
export class AlbumsDetailComponent implements OnInit, OnDestroy {
  public album: Album | null = null;
  public photos: Photo[] | null = null;

  public updateFormShown = false;
  public newPhotoFormShown = false;

  private albumSubscription: Subscription | null = null;
  private photosSubscription: Subscription | null = null;

  constructor(
    private readonly albumsService: AlbumsService,
    private readonly photosService: PhotosService,
    private readonly logsService: LogsService,
    private readonly metricsService: MetricsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.albumSubscription = this.albumsService
        .getAlbum(+id)
        .subscribe((album) => {
          this.album = album;
        });
      this.photosSubscription = this.albumsService
        .getAlbumPhotos(+id)
        .subscribe((photos) => {
          this.photos = photos;
        });
    }
  }

  ngOnDestroy(): void {
    if (this.albumSubscription) {
      this.albumSubscription.unsubscribe();
    }
    if (this.photosSubscription) {
      this.photosSubscription.unsubscribe();
    }
  }

  public showUpdateForm() {
    this.updateFormShown = true;
  }

  public hideUpdateForm() {
    this.updateFormShown = false;
  }

  public showNewPhotoForm() {
    this.newPhotoFormShown = true;
  }

  public hideNewPhotoForm() {
    this.newPhotoFormShown = false;
  }
  

 

  public updateAlbum(newTitle: string): void {
    const newAlbum = { title: newTitle };
    this.albumsService.updateAlbum(this.album!.id, newAlbum).subscribe((album) => {
      this.album = { ...this.album!, ...album };
      this.updateFormShown = false;
      this.metricsService.updateUserMetrics(this.album!.userId, {
        updatedAlbums: this.album.id,
      });
      this.logsService.createUpdateAlbumLog(this.album!.userId, this.album!.id);
    });
  }

  public createPhoto(newPhoto: Partial<Photo>): void {
    this.photosService.createPhoto({...newPhoto, albumId: this.album!.id} as Photo).subscribe((photo) => {
      this.photos = [...(this.photos || []), photo];
      this.newPhotoFormShown = false;
      this.metricsService.updateUserMetrics(this.album!.userId, {
        updatedAlbums: this.album!.id,
      });
      this.logsService.createNewPhotoLog(this.album!.userId, photo.id);
    });
  }

  public deletePhoto(photo: Photo): void {
    this.photosService.deletePhoto(photo.id).subscribe(() => {
      this.photos = this.photos!.filter((p) => p.id !== photo.id);
      this.metricsService.updateUserMetrics(this.album!.userId, {
        updatedAlbums: this.album!.id,
      });
      this.logsService.createDeletePhotoLog(this.album!.userId, photo.id);
    });
  }

  public deleteAlbum(): void {
    if (this.album) {
      this.albumsService.deleteAlbum(this.album.id).subscribe(() => {
        const { userId, id } = this.album!;
        this.album = null;
        this.logsService.createDeleteAlbumLog(userId, id);
        this.metricsService.updateUserMetrics(userId, {
          deletedAlbums: id,
        });
        this.router.navigate(['/users', userId]);
      });
    }
  }
}
