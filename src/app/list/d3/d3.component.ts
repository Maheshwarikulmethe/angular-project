import { Component } from '@angular/core';
import { FootballService } from 'src/app/football.service';
@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component {

  collection:any;

  constructor( private football:FootballService){}

  
 ngOnInit():void{
  this.football.getlist3().subscribe((result1)=>{
   this.collection=result1;
  })

 }


}
