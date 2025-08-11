import { Component } from '@angular/core';
import { Employee, EmpService } from '../../services/emp-service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-emp-list',
  imports:[NgFor],
  templateUrl: './emp-list.html',
  styleUrls: ['./emp-list.css']
})
export class EmpListComponent {
  empList: Employee[] = [];

  constructor(private empService:EmpService ) {
    this.empList = this.empService.empList;
  }
}