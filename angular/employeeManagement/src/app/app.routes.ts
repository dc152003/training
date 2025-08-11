import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AddEmpComponent } from './components/AddEmpComponent/add-emp';
import { CurrentOpenings } from './components/current-openings/current-openings';
import { DeleteEmpComponent } from './components/DeleteComponnetEmp/delete-emp';
import { EditEmpComponent } from './components/EditEmpComponent/edit-emp';
import { EmpCulture } from './components/emp-culture/emp-culture';
import { EmpListComponent } from './components/EmpListComponent/emp-list';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'add-emp',component:AddEmpComponent},
    {path:'current-openings',component:CurrentOpenings},
    {path:'delete-emp',component:DeleteEmpComponent},
    {path:'edit-emp',component:EditEmpComponent},
    {path:'emp-culture',component:EmpCulture},
    {path:'emp-list',component:EmpListComponent}
    
];
