import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global/global.service';
import { Router } from '@angular/router';
import { Observable, Subscription, timer, interval } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.css']
})
export class CreatePurchaseComponent implements OnInit {

  isCustomer : boolean = false;

  interID : any = 0;

  purchaseID: any = 0;

  private intervalTimer = interval(1000);
  private leavePageTimer = timer(5000);
  private subscription : Subscription = Subscription.EMPTY;
  private leavePageSubscription : Subscription = Subscription.EMPTY;
  timeUntilPageChanges : number = 0; 
  constructor(private globalService : GlobalService,
    private router:Router,
    private activatedRoute : ActivatedRoute) { 

    }

  ngOnInit(): void {
    this.purchaseID = sessionStorage.getItem("purchaseID");
    console.log(this.purchaseID);
    this.isCustomer = this.globalService.isCustomer();
    this.globalService.setIsShopping(false);
    this.timeUntilPageChanges = 5000; //milliseconds
    this.subscription = this.intervalTimer.subscribe(()=>this.lowerTimeByOneSecond());
    this.leavePageSubscription = this.leavePageTimer.subscribe(()=>this.leavePage());
    
   
  }

  leavePage() : void{

   
    this.subscription.unsubscribe();
    this.leavePageSubscription.unsubscribe();

    if(this.globalService.isCustomer()){
      this.router.navigate([`get-profile/${this.globalService.getUserID()}`])
    }
    else{ //guest
      this.router.navigate([`get-purchase-history/${this.globalService.getUserID()}`]);
    }
  }

  lowerTimeByOneSecond(){
    this.timeUntilPageChanges -= 1000;
    if(this.timeUntilPageChanges < 0) this.timeUntilPageChanges = 0;
  }

  getPurchaseID() : number{
    return this.purchaseID;
  }
}
