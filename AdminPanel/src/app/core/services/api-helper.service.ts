import { HttpClient, HttpParams, HttpResponseBase } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  Observable,
  of as _observableOf,
  throwError as _observableThrow,
} from 'rxjs';
import {
  catchError as _observableCatch,
  mergeMap as _observableMergeMap,
} from 'rxjs/operators';

export interface IParam {
  key: string;
  value: string | number;
  prefixParam?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiHelperService {
  private http: HttpClient;

  constructor(@Inject(HttpClient) http: HttpClient) {
    this.http = http;
  }

  get<T>(fromString: string, url: string): Observable<T> {
    let url_ = url;

    const options = {
      params: new HttpParams({
        fromString: fromString,
      }),
    };

    options.params = this.removeNullValuesFromQueryParams(options.params);

    return this.http
      .request('get', url_, options)
      .pipe(
        _observableMergeMap((response_: any) => {
          return _observableOf<T>(<any>response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return _observableOf<T>(<any>response_);
            } catch (e) {
              return <Observable<T>>(<any>_observableThrow(e));
            }
          } else return <Observable<T>>(<any>_observableThrow(response_));
        })
      );
  }
  post<T>(body: T, url: string): Observable<T> {
    let url_ = url;
    let options_: any = {
      body: body,
    };

    return this.http
      .request('post', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return _observableOf<T>(<any>response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return _observableOf<T>(<any>response_);
            } catch (e) {
              return <Observable<T>>(<any>_observableThrow(e));
            }
          } else return <Observable<T>>(<any>_observableThrow(response_));
        })
      );
  }
  put<T>(body: T, url: string): Observable<T> {
    let url_ = url;
    let options_: any = {
      body: body,
    };

    return this.http
      .request('put', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return _observableOf<T>(<any>response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return _observableOf<T>(<any>response_);
            } catch (e) {
              return <Observable<T>>(<any>_observableThrow(e));
            }
          } else return <Observable<T>>(<any>_observableThrow(response_));
        })
      );
  }
  delete<T>(fromString: string, url: string): Observable<T> {
    let url_ = url;

    const options = {
      params: new HttpParams({
        fromString: fromString,
      }),
    };

    options.params = this.removeNullValuesFromQueryParams(options.params);

    return this.http
      .request('delete', url_, options)
      .pipe(
        _observableMergeMap((response_: any) => {
          return _observableOf<T>(<any>response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return _observableOf<T>(<any>response_);
            } catch (e) {
              return <Observable<T>>(<any>_observableThrow(e));
            }
          } else return <Observable<T>>(<any>_observableThrow(response_));
        })
      );
  }
  
  private removeNullValuesFromQueryParams(params: HttpParams): HttpParams {
    const paramsKeysAux = params.keys();
    paramsKeysAux.forEach((key) => {
      const value = params.get(key);
      if (value === null || value === undefined || value === '') {
        params['map'].delete(key);
      }
    });

    return params;
  }
}
