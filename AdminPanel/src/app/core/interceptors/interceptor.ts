import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const profile = localStorage.getItem('profile');
    if (profile) {
      request = request.clone({
        headers: request.headers
          .set('Authorization', 'Bearer ' + JSON.parse(profile).jwToken)
          .set(
            'Accept-Language',
            localStorage.getItem('selectedLanguage') ??
              environment.defaultLanguage
          ),
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      })
    );
  }
}
