import { Component } from '@angular/core';
import { FootballService } from 'src/app/football.service';
@Component({
  selector: 'app-d4',
  templateUrl: './d4.component.html',
  styleUrls: ['./d4.component.css']
})
export class D4Component {


  collection:any;

  constructor( private football:FootballService){}

  
 ngOnInit():void{
  this.football.getlist4().subscribe((result1)=>{
   this.collection=result1;
  })

 }

}
