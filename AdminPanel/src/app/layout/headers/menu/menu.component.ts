import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(private translate: TranslateService) {
    var model = [
      {
        title: 'Dashboard',
        url: 'dashboard',
        icon: 'dashboard',
      },
      {
        title: 'Products',
        url: 'products',
        icon: 'dashboard',
      },
    ];
    this.initializeMenu(model);
  }

  menu: any = [];
  private initializeMenu(model: any[]) {
    var titleList = model.map((p) => p.title);
    this.translate.get(titleList).subscribe((translations: any) => {
      for (let index = 0; index < model.length; index++) {
        const element = model[index];
        this.menu.push({
          title: translations[element.title],
          url: element.url,
          icon: element.icon,
        });
      }
    });
  }
}
