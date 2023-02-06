import { UserMetrics } from '../../models/user.model';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

// Mocked user metrics. Initial values  would be fetched from a backend API
const userMetrics: Record<number, UserMetrics> = {
  1: {
    createdAlbums: new Set([]),
    updatedAlbums: new Set([]),
    deletedAlbums: new Set([]),
  },
  2: {
    createdAlbums: new Set([]),
    updatedAlbums: new Set([]),
    deletedAlbums: new Set([]),
  },
  3: {
    createdAlbums: new Set([]),
    updatedAlbums: new Set([]),
    deletedAlbums: new Set([]),
  },
  4: {
    createdAlbums: new Set([]),
    updatedAlbums: new Set([]),
    deletedAlbums: new Set([]),
  },
  5: {
    createdAlbums: new Set([]),
    updatedAlbums: new Set([]),
    deletedAlbums: new Set([]),
  },
  6: {
    createdAlbums: new Set([]),
    updatedAlbums: new Set([]),
    deletedAlbums: new Set([]),
  },
  7: {
    createdAlbums: new Set([]),
    updatedAlbums: new Set([]),
    deletedAlbums: new Set([]),
  },
  8: {
    createdAlbums: new Set([]),
    updatedAlbums: new Set([]),
    deletedAlbums: new Set([]),
  },
  9: {
    createdAlbums: new Set([]),
    updatedAlbums: new Set([]),
    deletedAlbums: new Set([]),
  },
  10: {
    createdAlbums: new Set([]),
    updatedAlbums: new Set([]),
    deletedAlbums: new Set([]),
  }
};

@Injectable({
  providedIn: 'root',
})
export class MetricsService {
  constructor() {}

  // Mocked method to get user metrics from a backend API. Ideally, this would be fetched from a backend API and handled in a similar way to the other methods in this service
  // In a real-world scenario, this would be handled by a backend API and the user metrics would be stored in a database. This would be fetched from the database and returned to the frontend
  // It is not a good practise to implement and handle business logic only in the frontend.
  /**
   * getMetrics method to get a user's metrics
   * @param id user id to get
   * @example this.userService.getMetrics(1).subscribe((metrics) => { ... });
   * @returns Observable of UserMetrics
   */
  public getUserMetrics(id: number): Observable<UserMetrics> {
    return of(userMetrics[id]).pipe(
      tap(() => {
        console.log(`User metrics fetched for user ${id}`);
      })
    );
  }

  // Mocked method to update user metrics in a backend API. Ideally, this would be updated in a backend API and handled in a similar way to the other methods in this service
  /**
   *
   * @param id user id
   * @param metrics partial record of user metrics with album id as value
   * @example this.userService.updateUserMetrics(1, { createdAlbums: 1 }).subscribe((metrics) => { ... });
   * @returns void
   */
  public updateUserMetrics(
    id: number,
    metrics: Partial<Record<keyof UserMetrics, number>>
  ): Observable<UserMetrics> {    
    Object.entries(metrics).forEach(([metric, albumId]) => {
      userMetrics[id][metric as keyof UserMetrics].add(
        albumId
      );
      if (metric === 'deletedAlbums') {
        userMetrics[id].createdAlbums.delete(albumId);
        userMetrics[id].updatedAlbums.delete(albumId);
      }
    });
    return of(userMetrics[id]).pipe(
      tap(() => {
        console.log(`User metrics updated for user ${id}`);
      })
    );
  }
}
