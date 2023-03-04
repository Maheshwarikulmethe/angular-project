import { Component } from '@angular/core';
import { FootballService } from 'src/app/football.service';
@Component({
  selector: 'app-d6',
  templateUrl: './d6.component.html',
  styleUrls: ['./d6.component.css']
})
export class D6Component {

  collection:any;

  constructor( private football:FootballService){}

  
 ngOnInit():void{
  this.football.getlist6().subscribe((result1)=>{
   this.collection=result1;
  })

 }

}
