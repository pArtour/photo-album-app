import { Photo } from './../../../core/models/photo.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, Subscription, catchError, of } from 'rxjs';
import { Album } from 'src/app/core/models/album.model';
import { User, UserMetrics } from 'src/app/core/models/user.model';
import { MetricsService } from 'src/app/core/services/metrics/metrics.service';
import { UsersService } from 'src/app/users/services/users.service';
import { LogsService } from 'src/app/core/services/logs/logs.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
})
export class UsersDetailComponent implements OnInit, OnDestroy {
  private id: string | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly metricsService: MetricsService,
    private readonly usersService: UsersService,
    private readonly logsService: LogsService
  ) {}
  public user: User | null | null = null;
  public albums: Album[] | null = null;
  public metrics: UserMetrics | null = null;

  public newPhotoFormShown = false;
  public newAlbumFormShown = false;

  private dataSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.dataSubscription = combineLatest([
        this.usersService.getUser(+this.id),
        this.usersService.getUserAlbums(+this.id),
        this.metricsService.getUserMetrics(+this.id),
      ])
        .pipe(map(([user, albums, metrics]) => ({ user, albums, metrics })))
        .subscribe((data) => {
          this.user = data.user;
          this.albums = data.albums;
          this.metrics = data.metrics;
        });
    }
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }

  public createAlbum(): void {
    if (this.id && this.metrics) {
      this.metricsService
        .updateUserMetrics(+this.id, {
          createdAlbums: 1,
        })
        .pipe(
          catchError((err) => {
            alert(
              `Error updating user metrics for user ${this.id}: ${err.message}`
            );
            return of(this.metrics);
          })
        )
        .subscribe((newMetrics) => {
          this.metrics = newMetrics;
        });
    }
  }

  public showCreatePhotoForm(): void {
    this.newPhotoFormShown = true;
    this.hideCreateAlbumForm();
  }

  public hideCreatePhotoForm(): void {
    this.newPhotoFormShown = false;
  }

  public showCreateAlbumForm(): void {
    this.newAlbumFormShown = true;
    this.hideCreatePhotoForm();
  }

  public hideCreateAlbumForm(): void {
    this.newAlbumFormShown = false;
  }

  public createNewPhoto(newPhoto: Partial<Photo>): void {
    this.usersService
      .createNewAlbumPhoto(newPhoto as Photo)
      .subscribe((photo) => {
        this.metricsService.updateUserMetrics(this.user!.id, {
          updatedAlbums: newPhoto.albumId,
        });

        this.logsService.createNewPhotoLog(this.user!.id, photo.id);
        this.hideCreatePhotoForm();
      });
  }

  public createNewAlbum(newAlbum: Partial<{title: string}>): void {
    this.usersService
      .createUserAlbum(this.user!.id, newAlbum as Album)
      .subscribe((album) => {
        if (album) {
          this.metricsService.updateUserMetrics(this.user!.id, {
            createdAlbums: 1,
          });
          this.albums = [album, ...this.albums!];
          this.logsService.createNewAlbumLog(this.user!.id, album.id);
        }
        // this.router.navigate(['/albums', album?.id]); commented out because it will throw 404 error brcause of jsonplaceholder api limitations
        this.hideCreateAlbumForm();
      });
  }
}
