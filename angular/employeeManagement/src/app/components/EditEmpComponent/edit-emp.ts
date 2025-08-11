// import { Component } from '@angular/core';
// import { EmpService } from '../../services/emp-service';


// @Component({
//   selector: 'app-edit-emp',
//   templateUrl: './edit-emp.html',
//   styleUrls: ['./edit-emp.css']
// })
// export class EditEmpComponent {
//   constructor(private empService:EmpService) {}

//   editEmp() {
//     this.empService.editEmp();
//   }
// }


import { Component } from '@angular/core';
import { EmpService, Employee } from '../../services/emp-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-emp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-emp.html',
  styleUrls: ['./edit-emp.css']
})
export class EditEmpComponent {
  editEmp: Employee = {
    empNo: 0,
    empName: '',
    empDesignation: '',
    empSalary: 0,
    empIsPermanent: false
  };

  constructor(private empService: EmpService) {}

  onEditEmp() {
    this.empService.editEmp(this.editEmp);
  }
}