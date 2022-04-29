import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  branches:any=['', 'Mech', 'Elect', 'Instru', 'Civil', 'Comp', 'IT'];
  roles:any=['', 'Angular-Developer', 'React-Developer', 'Fullstack-Developer', 'Web-Designer', 'Interior-Designer'];
  updateFrm:any;
  dataPoint:any;
  isSubmitted:boolean=false;

  constructor(private fb:FormBuilder, private share:DataShareService, private rout:Router) {
  this.share.getIdData().subscribe((res:any)=>{
    console.log(res);
    this.dataPoint=res;
    console.log(this.dataPoint.branch);
  })
   }

  ngOnInit(): void {
    this.updateFrm = this.fb.group({
      name:[this.dataPoint.name],
      age:[this.dataPoint.age],
      empId:[this.dataPoint.empId],
      branch:[this.dataPoint.branch],
      role:[this.dataPoint.role],
    })
  }

  updateFrmFun(){
    this.updateFrm.value;
    console.log(this.updateFrm.value);
    this.isSubmitted=true;
    this.rout.navigate(['details']);

    this.share.editData(this.dataPoint.id, this.updateFrm.value).subscribe(
      (res:any)=>{
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      })      
  }

  get f(){
    return this.updateFrm.controls
  }
}
