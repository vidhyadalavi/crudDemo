import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { UpdatesComponent } from './updates/updates.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'staff',component: StaffComponent},
  {path:'details', component: DetailsComponent},
  {path:'updates', component: UpdatesComponent},
  {path:'**' , redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
