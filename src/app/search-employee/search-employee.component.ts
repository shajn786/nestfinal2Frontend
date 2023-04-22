import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  employeeCode =""
data:any = []
result:any = []

constructor(private api : ApiService)
{

}

  readValues=()=>
  {
     this.data={"employeeCode":this.employeeCode}
     this.api.searchEmp(this.data).subscribe(
      (response:any)=>
      {
         this.result=response
      }
     )
  }

  delete=(employeeCode:any)=>
  {
      let data:any={"employeeCode":employeeCode}
      this.api.deleteEmp(data).subscribe(
        (response:any)=>
        {
             if(response.status == "success")
             {
              alert("deleted")
              window.location.reload()
             }
             else
             {
                alert("not deleted")
             }
        }
      )
  }

}
