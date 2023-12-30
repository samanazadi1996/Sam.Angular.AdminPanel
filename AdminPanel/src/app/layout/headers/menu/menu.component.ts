import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  menu :any= [];

  constructor(private translate: TranslateService) {
    this.initializeMenu();
  }
  ngOnInit() {
    this.initializeMenu();
  }

  private initializeMenu() {
    this.translate.get(['Dashboard', 'Products']).subscribe((translations: any) => {
      this.menu = [
        {
          title: translations['Dashboard'],
          url: 'dashboard',
          icon: 'dashboard',
        },
        {
          title: translations['Products'],
          url: 'products',
          icon: 'product',
        }
      ];
    });
  }
}
