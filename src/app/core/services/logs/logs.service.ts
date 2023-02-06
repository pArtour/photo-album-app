import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Log,
  LogActionType,
  LogEntityType,
} from 'src/app/core/models/log.model';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  private readonly _logs$ = new BehaviorSubject<Log[]>([]);

  constructor() {}

  public get logs$(): Observable<Log[]> {
    return this._logs$.asObservable();
  }

  private createLog(log: Log) {
    this._logs$.next([log, ...this._logs$.getValue()]);
  }

  public createNewPhotoLog(userId: number, photoId: number) {
    this.createLog(
      this.getNewLog(
        userId,
        LogEntityType.PICTURE,
        photoId,
        LogActionType.CREATE
      )
    );
  }

  public createUpdatePhotoLog(userId: number, photoId: number) {
    this.createLog(
      this.getNewLog(
        userId,
        LogEntityType.PICTURE,
        photoId,
        LogActionType.UPDATE
      )
    );
  }

  public createDeletePhotoLog(userId: number, photoId: number) {
    this.createLog(
      this.getNewLog(
        userId,
        LogEntityType.PICTURE,
        photoId,
        LogActionType.DELETE
      )
    );
  }

  public createNewAlbumLog(userId: number, albumId: number) {
    this.createLog(
      this.getNewLog(userId, LogEntityType.ALBUM, albumId, LogActionType.CREATE)
    );
  }

  public createUpdateAlbumLog(userId: number, albumId: number) {
    this.createLog(
      this.getNewLog(userId, LogEntityType.ALBUM, albumId, LogActionType.UPDATE)
    );
  }

  public createDeleteAlbumLog(userId: number, albumId: number) {
    this.createLog(
      this.getNewLog(userId, LogEntityType.ALBUM, albumId, LogActionType.DELETE)
    );
  }

  private getNewLog(
    userId: number,
    entity: LogEntityType,
    entityId: number,
    action: LogActionType
  ): Log {
    return {
      id: Math.floor(Math.random() * (10000 - 0 + 1) + 0),
      userId,
      entity,
      action,
      entityId,
      date: new Date(),
    };
  }
}
