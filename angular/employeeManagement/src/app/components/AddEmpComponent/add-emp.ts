
import { Component } from '@angular/core';
import { EmpService, Employee } from '../../services/emp-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-emp.html',
  styleUrls: ['./add-emp.css']
})
export class AddEmpComponent {
  newEmp: Employee = {
    empNo: 0,
    empName: '',
    empDesignation: '',
    empSalary: 0,
    empIsPermanent: false
  };

  constructor(private empService: EmpService) {}

  onAddEmp() {
    this.empService.addEmp(this.newEmp);
    this.newEmp = { empNo: 0, empName: '', empDesignation: '', empSalary: 0, empIsPermanent: false };
  }
}