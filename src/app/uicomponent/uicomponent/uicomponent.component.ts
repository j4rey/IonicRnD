import { Component, OnInit } from '@angular/core';
import { AppMenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-uicomponent',
  templateUrl: './uicomponent.component.html',
  styleUrls: ['./uicomponent.component.scss'],
})
export class UiComponent implements OnInit {

  menu:[];
  constructor(private menuService: AppMenuService) {
    this.menuService.OnMenuUpdated.subscribe((x:[])=>{
      let temp = x.find((m:any)=> m.title === 'Components')
      if(temp){
        this.menu = temp['children'];
      }
    });
    this.menuService.RequestMenu();
  }

  ngOnInit() {}

}
