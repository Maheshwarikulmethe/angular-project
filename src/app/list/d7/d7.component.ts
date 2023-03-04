import { Component } from '@angular/core';
import { FootballService } from 'src/app/football.service';
@Component({
  selector: 'app-d7',
  templateUrl: './d7.component.html',
  styleUrls: ['./d7.component.css']
})
export class D7Component {


  collection:any;

  constructor( private football:FootballService){}

  
 ngOnInit():void{
  this.football.getlist7().subscribe((result1)=>{
   this.collection=result1;
  })

 }

}
