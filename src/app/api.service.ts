import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  searchEmp = (datatToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchemp",datatToSend)
  }

  deleteEmp=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/deleteemp",dataToSend)
  }

  updateEmp=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addemployee",dataToSend)
  }
  
}
