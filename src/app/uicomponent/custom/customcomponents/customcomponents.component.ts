import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppMenuService } from 'src/app/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customcomponents',
  templateUrl: './customcomponents.component.html',
  styleUrls: ['./customcomponents.component.scss'],
})
export class CustomComponent implements OnInit, OnDestroy {
 
  menuSubscription: Subscription;
  menu: [];
  
  constructor(private menuService: AppMenuService) { 
    this.menuService.OnMenuUpdated.subscribe((m:[])=>{
      let temp = m.find((m:any)=> m.title === 'Components')
      if(temp){
        let children: [] = temp['children'];
        if(children.find((x:any)=> x['title'] === 'Custom')){
          this.menu = children.find((x:any)=> x['title'] === 'Custom')['children'];
        }
      }
    });
    this.menuService.RequestMenu();
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    if(this.menuSubscription)
    this.menuSubscription.unsubscribe();
  }
}
