import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  public id:any=new BehaviorSubject('');
  public currentId=this.id.asObservable();
  
  public data:any=new BehaviorSubject('');
  public currentData:any=this.data.asObservable();
  constructor(private http:HttpClient) {
   }

   setIdData(id:any, data:any){
     this.id.next(id);
     this.data.next(data);
   }
  
   getIdData(){
     return this.currentId, this.currentData;
   }

   getData(){
     return this.http.get(' http://localhost:3000/api/getAllCourses');
   }

   insertData(data:any){
     return this.http.post(' http://localhost:3000/api/insertCourses',data)
   }

   editData(id:any, data:any){
     return this.http.put('http://localhost:3000/api/updateCourses/'+id, data)
   }

   deleteData(id:any){
     return this.http.delete(' http://localhost:3000/api/deleteCourses/'+id)
   }
}
