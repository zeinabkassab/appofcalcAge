import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 constructor() {}
   // iterpolation
    firstName:string = 'omar'
    lastName :string =  'ahmed'
////////////////////////////////////////////////////////


    // function 
msg:string = 'this is my first app'
getMsg():string{
  return this.msg
}
// ==========================================================
 //prperty binding

 title = 'hello from angular'

 color ='red'

//  ================================
isdisabeled=true

// =======================
img='../../assets/images/1.jpg'


////////////////////////////////////////////////////
  birthdate!: Date;
  age!: Number;



     ngOnInit() { }
     public CalculateAge(): void
     {
       debugger
         if(this.birthdate){
     
           var timeDiff = Math.abs(Date.now() - new Date(this.birthdate).getTime());
          //   //Used Math.floor instead of Math.ceil
          //   //so 26 years and 140 days would be considered as 26, not 27.
            this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        }
    }

}


 