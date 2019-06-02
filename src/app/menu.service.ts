import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppMenuService{
  @Output() OnMenuUpdated = new EventEmitter<any[]>();
  private menu:[]

  RequestMenu(){
    this.OnMenuUpdated.emit(this.menu);
  }
  constructor(private httpClient:HttpClient){
    console.log('App Menu Constructor');

    this.httpClient.get('./assets/menu.json')
    .subscribe((m:[])=>{
      this.menu = m;
      console.log(this.menu);
      this.OnMenuUpdated.emit(this.menu);
    })
  }
}