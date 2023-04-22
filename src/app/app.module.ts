import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoutes : Routes
=[
  {
    path:"",component:SearchEmployeeComponent
  },
  {
    path:"updateemp",component:UpdateEmpComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    SearchEmployeeComponent,
    UpdateEmpComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
