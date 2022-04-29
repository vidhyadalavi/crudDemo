import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public listData:any;
  public frmData:any;
  public deletedData:any;
  public getDtFrmDeleteRes:any;
  constructor(private servData:DataShareService, private rout:Router) {
    this.getAllDataFrmBackend();
    this.insertDataFromBackend();    
   }

  ngOnInit(): void {
     }

    addDataFun(){
      this.rout.navigate(['staff'])
  }

  onEdit(id:any, data:any){
    console.log(id);
    console.log(data);
    this.servData.setIdData(id, data);
    this.rout.navigate(['updates'])
  }

  
  onDelete(id:any){
    if(confirm('Are you want to delete data?')){
      this.servData.deleteData(id).subscribe(
        (res:any)=>{
          console.log(res);

          this.servData.getData().subscribe(
            (res:any)=>{
              console.log(res);
              this.deletedData=res;

              if(this.deletedData.length>0){
                this.getAllDataFrmBackend();
              }
            })
        })
    }
   
  }

  getAllDataFrmBackend(){
     this.servData.getData().subscribe(
       (res:any)=>{
         console.log(res);
         this.listData=res;
       },
       (err:any)=>{
         console.log(err);
       }
     )
  }

  insertDataFromBackend(){
    this.servData.insertData(this.frmData).subscribe(
      (res:any)=>{
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

}
