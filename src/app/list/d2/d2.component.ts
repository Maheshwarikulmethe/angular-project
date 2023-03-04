import { Component } from '@angular/core';
import { FootballService } from 'src/app/football.service';
@Component({
  selector: 'app-d2',
  templateUrl: './d2.component.html',
  styleUrls: ['./d2.component.css']
})
export class D2Component {
  collection:any;

  constructor( private football:FootballService){}

  
 ngOnInit():void{
  this.football.getlist2().subscribe((result1)=>{
   this.collection=result1;
  })
}
}