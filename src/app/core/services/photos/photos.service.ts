import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, retry, catchError, of } from 'rxjs';
import { Photo } from '../../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private readonly photosUrl = 'https://jsonplaceholder.typicode.com/photos/';

  constructor(private readonly http: HttpClient) {}

  /**
   * createPhoto method creates a new photo in the database
   * @param photo new photo data to be created
   * @example this.photosService.createPhoto(photo).subscribe((photo) => { ... });
   * @returns new photo object
   */
  public createPhoto(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(this.photosUrl, photo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).pipe(
      tap((photo) => {
        console.log(`New photo created with id ${photo.id}`);
      }),
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error.error);
        return of();
      })
    );
  }

  /**
   * updatePhoto method updates the album photo in the database
   * @param photo photo data to be updated
   * @example this.photosService.updatePhoto(photo).subscribe((photo) => { ... });
   * @returns updated photo object
   */
  public updatePhoto(photo: Photo): Observable<Photo> {
    return this.http.patch<Photo>(`${this.photosUrl}${photo.id}`, photo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).pipe(
      tap(() => {
        console.log(`Photo with ${photo.id} updated`);
      }),
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error.error);
        return of();
      })
    );
  }

  /**
   * deletePhoto method deletes the album photo from the database
   * @param id photo id
   * @example this.photosService.deletePhoto(1).subscribe(() => { ... });
   * @returns void
   */
  public deletePhoto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.photosUrl}${id}`).pipe(
      tap(() => {
        console.log(`Photo with ${id} deleted`);
      }),
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error.error);
        return of();
      })
    );
  }
}
