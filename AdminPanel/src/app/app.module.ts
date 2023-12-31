import { FormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ControlValidationComponent } from './shared/components/control-validation/control-validation.component';
import { ProductListComponent } from './modules/product/view/product-list/product-list.component';
import { DashboardComponent } from './modules/dashboard/view/dashboard/dashboard.component';
import { ProductCreateComponent } from './modules/product/view/product-create/product-create.component';
import { HttpConfigInterceptor } from './core/interceptors/interceptor';
import { HttpErrorInterceptor } from './core/interceptors/errorInterceptor';
import { LanguageComponent } from './layout/headers/language/language.component';
import { MenuComponent } from './layout/headers/menu/menu.component';
import { ProductUpdateComponent } from './modules/product/view/product-update/product-update.component';
import { TextBoxComponent } from './shared/components/text-box/text-box.component';
import { NumberBoxComponent } from './shared/components/number-box/number-box.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';

const routes: Routes = [{ path: 'dashboard', component: DashboardComponent }];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    ControlValidationComponent,
    ProductListComponent,
    ProductCreateComponent,
    LanguageComponent,
    MenuComponent,
    ProductUpdateComponent,
    TextBoxComponent,
    NumberBoxComponent,
    PaginationComponent,
  ],

  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
