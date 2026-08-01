import { Component } from '@angular/core';
import { IStudent } from './shared/models/students';
import { students } from './shared/consts/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang_first_pro';
  studentsArr : IStudent[] = students;
}

