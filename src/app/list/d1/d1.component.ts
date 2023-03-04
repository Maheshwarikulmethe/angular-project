import { Component } from '@angular/core';
import { FootballService } from 'src/app/football.service';
@Component({
  selector: 'app-d1',
  templateUrl: './d1.component.html',
  styleUrls: ['./d1.component.css']
})
export class D1Component {

  collection:any;

  constructor( private football:FootballService){}

  
 ngOnInit():void{
  this.football.getlist1().subscribe((result1)=>{
   this.collection=result1;
  })



}
}