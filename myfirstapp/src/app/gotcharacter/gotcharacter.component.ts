import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gotcharacter',
  templateUrl: './gotcharacter.component.html',
  styleUrls: ['./gotcharacter.component.css']
})
export class GotcharacterComponent implements OnInit {
  gotcharacter:string[];
  gotcharacterfirstname:string[]=['John','arya','cersie','danerys'];
  gotcharacterlastname:string[]=['snow','stark','lannister','targarean'];
  i=0;
  stopswitchstatus=true;
  switchvalue:any;
  heading2:string='tyrion';
  constructor() {
  this.gotcharacter=this.gotcharacterfirstname;
  }

   startswitch(){
    this.switchvalue= setInterval(()=>{
      if(this.i%2==0){
        this.gotcharacter=this.gotcharacterfirstname;
      }else{
           this.gotcharacter=this.gotcharacterlastname;
      }
      this.i++;
      this.stopswitchstatus=false;
    },1000); 
     }

     stopswitch(){
       clearInterval(this.switchvalue);
       this.stopswitchstatus=true;
     }

  ngOnInit() {
  }

} 
