import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, retry, Observable, tap } from 'rxjs';
import { Album } from 'src/app/core/models/album.model';
import { Photo } from 'src/app/core/models/photo.model';
import { User, UserMetrics } from 'src/app/core/models/user.model';
import { PhotosService } from 'src/app/core/services/photos/photos.service';

@Injectable()
export class UsersService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users/';
  private readonly _users$ = new BehaviorSubject<User[]>([]);

  constructor(private readonly http: HttpClient, private photosService: PhotosService) {}

  /**
   * getUsers method to get users from the API and set the users$ BehaviorSubject
   * @example this.userService.getUsers();
   */
  public getUsers(): void {
    this.http
      .get<User[]>(this.url)
      .pipe(
        tap(() => {
          console.log('Users fetched');
        }),
        retry(2),
        catchError((error: HttpErrorResponse) => {
          console.error('An error occurred:', error.error);
          return of([]);
        })
      )
      .subscribe((users) => {
        this._users$.next(users);
      });
  }

  /**
   * getUser method to get a user from the API
   * @param id user id to get
   * @returns Observable of User
   */
  public getUser(id: number) {
    return this.http.get<User>(`${this.url}${id}`).pipe(
      tap(() => {
        console.log(`User with ${id} fetched`);
      }),
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error.error);
        return of(null);
      })
    );
  }

  /**
   * users$ getter to get the users$ BehaviorSubject as an Observable
   * @returns The users$ BehaviorSubject as an Observable
   * @example this.userService.users$.subscribe((users) => { ... });
   */
  public get users$(): Observable<User[]> {
    return this._users$.asObservable();
  }

  /**
   * getUserAlbums method to get a user's albums from the API
   * @param id user id to get
   * @returns Observable of Albums array
   */
  public getUserAlbums(id: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.url}${id}/albums`).pipe(
      tap(() => {
        console.log(`Albums fetched for user ${id}`);
      }),
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error.error);
        return of([]);
      })
    );
  }

  /**
   * createUserAlbum method creates a new user 
   * @param userId id of the user to create the album for
   * @param newAlbum new album data
   * @example this.usersService.createUserAlbum(1, { title: 'New Album' });
   * @returns Observable of Album object created
   */
  public createUserAlbum(userId: number, newAlbum: Album) {
    return this.http.post<Album>(`${this.url}${userId}/albums`, newAlbum, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).pipe(
      tap(() => {
        console.log(`Album created for user ${newAlbum.userId}`);
      }),
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error.error);
        return of(null);
      }
    ));
  }

  public createNewAlbumPhoto(newPhoto: Photo) {
    return this.photosService.createPhoto(newPhoto);
  }
}
