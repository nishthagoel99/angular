import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveeg',
  templateUrl: './directiveeg.component.html',
  styleUrls: ['./directiveeg.component.css']
})
export class DirectiveegComponent implements OnInit {
  friendsCharacter:string[]=['monica','pheobe','joey','chandler'];
  index:number=0;
  name:string;
  togglestatus:boolean=true;
  mystyle={};
  color:string;
  currentcss:string='stylered';
  colorstatus:string='black';
  
  togglenames(){
    this.togglestatus=!this.togglestatus;
  }
  getname(characters){
    this.name=characters;
  }

  setstyle(){
    this.mystyle={
      'font-weight':'bold',
      'font-size':'24px',
      'color':this.generaterandomcolor()
    }
  }

  generaterandomcolor(){
    this.color='#';
    var letter=['0','1',"2","3","4",'5','6','7','8','9','A','B','C','D','E','F'];
    for(var i=0;i<6;i++){
      this.color=this.color+letter[Math.floor(Math.random()*16)];
    }
    
    return this.color;
  }

  changecssclass(){
    if(this.currentcss=='stylered'){
      this.currentcss='stylewhite';
    }else{
      this.currentcss='stylered';
    }
  }

  


  constructor() { }

  ngOnInit() {
  }

}
