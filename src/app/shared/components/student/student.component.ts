import { Component } from "@angular/core";
import { IStudent } from "../../models/students";
import { students } from "../../consts/student";



@Component({
    selector: "app-student",
    templateUrl: "./student.component.html",
    styleUrls: ["./student.component.scss"]
})
export class StudentComponent {
    students: Array<IStudent> = students;
    
}
