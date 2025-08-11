import { Injectable } from '@angular/core';

export interface Employee {
  empNo: number;
  empName: string;
  empDesignation: string;
  empSalary: number;
  empIsPermanent: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  empList: Employee[] = [
    { empNo: 101, empName: 'Alice', empDesignation: 'Developer', empSalary: 60000, empIsPermanent: true },
    { empNo: 102, empName: 'Bob', empDesignation: 'Designer', empSalary: 55000, empIsPermanent: false },
    { empNo: 103, empName: 'Charlie', empDesignation: 'Manager', empSalary: 75000, empIsPermanent: true },
    { empNo: 104, empName: 'Diana', empDesignation: 'Tester', empSalary: 50000, empIsPermanent: false },
    { empNo: 105, empName: 'Ethan', empDesignation: 'Support', empSalary: 45000, empIsPermanent: true }
  ];

  // addEmp() {
  //   alert('Add Employee');
  // }

  // editEmp() {
  //   alert('Edit Employee');
  // }

  // deleteEmp() {
  //   alert('Delete Employee');
  // }

  addEmp(newEmp: Employee) {
    this.empList.push(newEmp);
  }

  editEmp(updatedEmp: Employee) {
    const index = this.empList.findIndex(emp => emp.empNo === updatedEmp.empNo);
    if (index !== -1) {
      this.empList[index] = updatedEmp;
    }
  }

  deleteEmp(empNo: number) {
    this.empList = this.empList.filter(emp => emp.empNo !== empNo);
  }

}