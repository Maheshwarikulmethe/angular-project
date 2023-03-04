import { Component } from '@angular/core';
import { FootballService } from 'src/app/football.service';
@Component({
  selector: 'app-d5',
  templateUrl: './d5.component.html',
  styleUrls: ['./d5.component.css']
})
export class D5Component {


  collection:any;

  constructor( private football:FootballService){}

  
 ngOnInit():void{
  this.football.getlist5().subscribe((result1)=>{
   this.collection=result1;
  })

 }
}
