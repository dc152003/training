// import { Component } from '@angular/core';
// import { EmpService } from '../../services/emp-service';


// @Component({
//   selector: 'app-delete-emp',
//   templateUrl: './delete-emp.html',
//   styleUrls: ['./delete-emp.css']
// })
// export class DeleteEmpComponent {
//   constructor(private empService:EmpService) {}

//   deleteEmp() {
//     this.empService.deleteEmp();
//   }
// }


import { Component } from '@angular/core';
import { EmpService } from '../../services/emp-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-emp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-emp.html',
  styleUrls: ['./delete-emp.css']
})
export class DeleteEmpComponent {
  empNoToDelete: number = 0;

  constructor(private empService: EmpService) {}

  onDeleteEmp() {
    this.empService.deleteEmp(this.empNoToDelete);
    this.empNoToDelete = 0;
  }
}