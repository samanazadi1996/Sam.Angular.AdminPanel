import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html'
})
export class LanguageComponent implements OnInit{
  ngOnInit(): void {
    this.selectedLanguage=localStorage.getItem("selectedLanguage")??this.languages[0]
  }
  languages = ['fa', 'en'];
  selectedLanguage= '';

  setLanguage() {
    console.log(this.selectedLanguage);
    localStorage.setItem("selectedLanguage",this.selectedLanguage)
    location.reload()
  }
}
