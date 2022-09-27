import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global/global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.css']
})
export class CreatePurchaseComponent implements OnInit {

  isCustomer : boolean = false;

  timeUntilPageChanges : number = 0; 
  constructor(private globalService : GlobalService,
    private router:Router) { }

  ngOnInit(): void {
    this.isCustomer = this.globalService.isCustomer();
    this.timeUntilPageChanges = 5000; //milliseconds
    this.globalService.setIsShopping(false);
    setTimeout(() => {
      this.leavePage();
    }, this.timeUntilPageChanges);
    setInterval(()=>{
      this.lowerTimeByOneSecond();
    },1000);
  }

  leavePage() : void{
    console.log("hi");
  }

  lowerTimeByOneSecond(){
    this.timeUntilPageChanges -= 1000;
    if(this.timeUntilPageChanges < 0) this.timeUntilPageChanges = 0;
  }
}
