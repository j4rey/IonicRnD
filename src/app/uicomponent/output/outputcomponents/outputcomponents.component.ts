import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppMenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-outputcomponents',
  templateUrl: './outputcomponents.component.html',
  styleUrls: ['./outputcomponents.component.scss'],
})
export class OutputComponent implements OnInit {

  menuSubscription: Subscription;
  menu: [];
  
  constructor(private menuService: AppMenuService) { 
    this.menuService.OnMenuUpdated.subscribe((m:[])=>{
      let temp = m.find((m:any)=> m.title === 'Components')
      if(temp){
        let children: [] = temp['children'];
        if(children.find((x:any)=> x['title'] === 'Input')){
          this.menu = children.find((x:any)=> x['title'] === 'Input')['children'];
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
