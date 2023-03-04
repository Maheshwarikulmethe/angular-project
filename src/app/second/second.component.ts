import { Component } from '@angular/core';
import { FootballService } from 'src/app/football.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {


  MData:any;
  legs:any;
  isSelected: boolean | undefined;
  filtered: any;
  selectedMarketName: any;
  selectedValue:any;
  
  constructor( private football:FootballService){}
  
  ngOnInit() {
  
    this.football.getlist8().subscribe((result8)=>{
     this.MData=result8;
    })

  }
  
  onChange() {
     this.filtered = this.MData.find((s:any) => s.MarketName === this.selectedMarketName && s.selectionValue === Number(this.selectedValue));
     this.isSelected = true;
     console.log(this.filtered); 
  }
   
}
