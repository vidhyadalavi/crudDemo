import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  isSubmitted:boolean=false;
  staffFrm:any;
  userdata:any;
  result:any;
  branches:any=['', 'Mech', 'Elect', 'Instru', 'Civil', 'Comp', 'IT'];
  roles:any=['', 'Angular-Developer', 'React-Developer', 'Fullstack-Developer', 'Web-Designer', 'Interior-Designer']
  constructor(private fb:FormBuilder, private share:DataShareService, private rout:Router) { }

  ngOnInit(): void {
    this.userdata=[]
    this.staffFrm = this.fb.group({
      name:['',[Validators.required]],
      age:['',[Validators.required]],
      empId:['',[Validators.required]],
      branch:['',[Validators.required]],
      role:['',[Validators.required]],
    })
  }

  staffFrmFun(){
    this.staffFrm.value;
    console.log(this.staffFrm.value);
    this.isSubmitted=true;
    
    this.share.insertData(this.staffFrm.value).subscribe(
      (res:any)=>{
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )
    this.rout.navigate(['details'])
    }


  get f(){
    return this.staffFrm.controls
  }
}
