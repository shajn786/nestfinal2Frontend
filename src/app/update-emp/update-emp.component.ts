import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent {
employeeCode1=""
employeeCode=""
employeeName=""
designation=""


data:any = []
result:any=[]

constructor(private api : ApiService)
{

}

readValues=()=>
{
  this.data = {"employeeCode":this.employeeCode1}
  this.api.searchEmp(this.data).subscribe(

    (response:any)=>
    {
      this.result=response
      console.log(response)
    }
  )
  
}

update=(id:any,employeeCode:any,employeeName:any,designation:any)=>
{
    let data:any = {"id":id,"employeeCode":employeeCode,"employeeName":employeeName,"designation":designation}
    this.api.updateEmp(data).subscribe(
      (response:any)=>
      {
           if(response.status == "success")
           {
            alert("updated successfully")
            window.location.reload()
           }
           else{
            alert ("not updated")
            window.location.reload()

           }
      }
    )
}




}
