/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { ApiResponse, IPark } from '@client-nx-her/shared/api';
import { Injectable } from '@angular/core';

/**
 * See https://angular.io/guide/http#requesting-data-from-a-server
 */
export const httpOptions = {
  observe: 'body',
  responseType: 'json',
};

/**
 *
 *
 */
@Injectable()
export class ParkService {
  endpoint = 'http://localhost:3000/api/park';

  constructor(private readonly http: HttpClient) {}

  /**
   * Get all items.
   *
   * @options options - optional URL queryparam options
   */
  public list(options?: any): Observable<IPark[] | null> {
    console.log(`list ${this.endpoint}`);

    return this.http
      .get<ApiResponse<IPark[]>>(this.endpoint, {
        ...options,
        ...httpOptions,
      })
      .pipe(
        map((response: any) => response.results as IPark[]),
        tap(console.log),
        catchError(this.handleError)
      );
  }

  /**
   * Get a single item from the service.
   *
   */
  public read(id: string | null, options?: any): Observable<IPark> {
    if (this.endpoint.includes(`/${id}`)) {
      this.endpoint = this.endpoint.replace(`/${id}`, '');
    } else {
      this.endpoint += `/${id}`;
    }
    if (this.endpoint.includes('/edit')) {
      this.endpoint = this.endpoint.replace('/edit', '');
    }

    console.log(`read ${this.endpoint}`);
    return this.http
      .get<ApiResponse<IPark>>(this.endpoint, {
        ...options,
        ...httpOptions,
      })
      .pipe(
        tap(console.log),
        map((response: any) => response.results as IPark),
        catchError(this.handleError)
      );
  }

  /**
   * Create a new item.
   *
   */
  public create(park: IPark, options?: any): Observable<IPark> {
    console.log(`create ${this.endpoint}`);

    return this.http
      .post<ApiResponse<IPark>>(this.endpoint, park, {
        ...options,
        ...httpOptions,
      })
      .pipe(
        tap(console.log),
        map((response: any) => response.results as IPark),
        catchError(this.handleError)
      );
  }

  /**
   * Update an existing item.
   *
   */
  public edit(park: IPark, options?: any): Observable<IPark> {
    console.log(`update ${this.endpoint}`);
    this.endpoint += `/${park.id}/edit`;

    return this.http
      .put<ApiResponse<IPark>>(this.endpoint, park, {
        ...options,
        ...httpOptions,
      })
      .pipe(
        tap(console.log),
        map((response: any) => response.results as IPark),
        catchError(this.handleError)
      );
  }

  /**
   * Handle errors.
   */
  public handleError(error: HttpErrorResponse): Observable<any> {
    console.log('handleError in ParkService', error);

    return throwError(() => new Error(error.message));
  }
}
