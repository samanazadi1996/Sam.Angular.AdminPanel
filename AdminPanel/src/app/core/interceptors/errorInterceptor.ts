import Swal from 'sweetalert2';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((response: any) => {
        var apiErrors: Array<String> = [];

        if (response.error instanceof ErrorEvent) {
          apiErrors.push(`Error: ${response.error.message}`);
        } else {
          this.handleServerError(response);
        }
        console.log(apiErrors);
        return throwError(apiErrors);
      })
    );
  }
  handleServerError(response: HttpErrorResponse): void {
    if (response.status == 401) {
      this.authenticationService.logout();
    } else {
      if (response.error.errors) {
        var apiErrors: Array<String> = [];
        for (let index = 0; index < response.error.errors.length; index++) {
          apiErrors.push(response.error.errors[index].description);
        }
        this.handleMessage(apiErrors.join('<br>'));
      } else {
        if (response.status == 400)
          this.handleMessage('درخواست شما نامعتبر میباشد');
        else if (response.status == 403)
          this.handleMessage('شما به این بخش دسترسی ندارید');
        else if (response.status == 404)
          this.handleMessage('درخواست شما نامعتبر میباشد');
        else if (response.status == 405)
          this.handleMessage('نوع درخواست شما صحیح نمی باشد');
        else if (response.status == 500)
          this.handleMessage('خطا در سرور داخلی');
        else this.handleMessage('خطایی رخ داده ، مجددا تلاش نمایید');
      }
    }
  }
  handleMessage(message: string): void {
    Swal.fire('danger', message);
  }
}
