import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AdminPanel';
  constructor(private translate: TranslateService) {
    var lang = localStorage.getItem('selectedLanguage');

    if (!lang) {
      lang = environment.defaultLanguage;
      localStorage.setItem('selectedLanguage', lang);
    }

    translate.setDefaultLang(lang);
    translate.use(lang);
  }
}
