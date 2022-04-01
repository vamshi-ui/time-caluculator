import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  submitForm!: FormGroup;
  todaysDate = new Date().toISOString().split('T')[0];
  constructor(private fb: FormBuilder, private router: Router) {
    this.submitForm = this.fb.group({
      userName: ['', Validators.required],
      ocassion: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (!localStorage.getItem('userData')) {
      localStorage.setItem('userData', '[]');
    }
  }
  submit(): void {
    const data: any = localStorage.getItem('userData');
    const userData = JSON.parse(data);
    const uniqId = userData.reduce((acc: number, ele: any) => {
      if (acc <= ele.id) {
        acc = ele.id + 1;
      }
      return acc;
    }, 0);
    this.submitForm.value.id = uniqId;
    userData.push(this.submitForm.value);
    localStorage.setItem('userData', JSON.stringify(userData));
    this.router.navigate(['countdown-timer'], { queryParams: { id: uniqId } });
  }
}
