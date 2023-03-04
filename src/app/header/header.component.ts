import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  date = new Date();
  nextDate = new Date();
  nextDate1 = new Date();
  nextDate2 = new Date();
  nextDate3 = new Date();
  nextDate4 = new Date();
  nextDate5 = new Date();

  ngOnInit() {
    this.nextDate.setDate(this.date.getDate() + 1);
    this.nextDate1.setDate(this.date.getDate() + 2);
    this.nextDate2.setDate(this.date.getDate() + 3);
    this.nextDate3.setDate(this.date.getDate() + 4);
    this.nextDate4.setDate(this.date.getDate() + 5);
    this.nextDate5.setDate(this.date.getDate() + 6);
    
    
  }


}
