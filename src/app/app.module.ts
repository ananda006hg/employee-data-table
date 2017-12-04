import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

const appRoutes:Routes=[
{path:'employee-data',component: EmployeeDataComponent},
{path:'employee-details',component: EmployeeDetailsComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
