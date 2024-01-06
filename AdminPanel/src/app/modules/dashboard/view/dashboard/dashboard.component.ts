import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { selectBoxOption } from 'src/app/core/services/selectBoxOption';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private titleService: Title,
    public router: Router,
    private fb: FormBuilder) {

    this.testForm = this.fb.group({
      name: [null, [Validators.required]],
    });
  }
  title = "dashboard"
  testForm: FormGroup;
  selectOptions: selectBoxOption[] = [{ value: 1, text: "one" }, { value: 2, text: "two" }, { value: 3, text: "three" }]
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  mbox() {
    // Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
    console.log(this.testForm.value)
  }
}

