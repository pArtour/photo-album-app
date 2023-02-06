import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, retry, tap } from 'rxjs';
import { Album } from 'src/app/core/models/album.model';
import { Photo } from 'src/app/core/models/photo.model';

@Injectable()
export class AlbumsService {
  private readonly url = 'https://jsonplaceholder.typicode.com/albums/';

  private readonly _albums$ = new BehaviorSubject<Album[]>([]);

  constructor(private readonly http: HttpClient) {}

  /**
   * getAlbumPhotos function to get album photos from the API
   * @param id album id
   * @example this.albumsService.getAlbumPhotos(1).subscribe((photos) => { ... });
   * @returns Observable of Photo[]
   */
  public getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.url}${id}/photos`).pipe(
      tap(() => {
        console.log('Album photos fetched');
      }),
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error.error);
        return of([]);
      })
    );
  }

  /**
   * getAlbums function to get albums from the API
   * @returns Observable of Album[]
   * @example this.albumsService.getAlbums().subscribe((albums) => { ... });
   */
  public getAlbums() {
    this.http
      .get<Album[]>(this.url)
      .pipe(
        tap(() => {
          console.log('Albums fetched');
        }),
        retry(2),
        catchError((error: HttpErrorResponse) => {
          console.error('An error occurred:', error.error);
          return of([]);
        })
      )
      .subscribe((albums) => {
        this._albums$.next(albums);
      });
  }

  /**
   * getAlbum function to get an album from the API
   * @param id album id
   * @example this.albumsService.getAlbum(1).subscribe((album) => { ... });
   * @returns Observable of Album or null
   */
  public getAlbum(id: number) {
    return this.http.get<Album>(`${this.url}${id}`).pipe(
      tap(() => {
        console.log('Album fetched');
      }),
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error.error);
        return of(null);
      })
    );
  }

  /**
   * updateAlbum method updates the album in the database
   * @param albumId album id
   * @param album album to be added to the database
   * @example updateAlbum({ id: 1, title: 'New title' }).subscribe((album) => { ... });
   * @returns Observable of Album or null
   */
  public updateAlbum(albumId: number, album: Partial<Album>): Observable<Album | null> {
    return this.http
      .patch<Album>(`${this.url}${albumId}`, album, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        tap(() => {
          console.log('Album updated');
        }),
        retry(2),
        catchError((error: HttpErrorResponse) => {
          console.error('An error occurred:', error.error);
          return of(null);
        })
      );
  }

  /**
   * deleteAlbum method deletes the album from  the database
   * @param id album id
   * @example deleteAlbum(1).subscribe((album) => { ... });
   */
  public deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`).pipe(
      tap(() => {
        console.log('Album deleted');
      }),
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error.error);
        return of();
      })
    );
  }

  public get albums$(): Observable<Album[]> {
    return this._albums$.asObservable();
  }
}
