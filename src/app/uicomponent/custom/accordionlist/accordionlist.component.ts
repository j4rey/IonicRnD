import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordionlist',
  templateUrl: './accordionlist.component.html',
  styleUrls: ['./accordionlist.component.scss'],
})
export class AccordionlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  toggleSection(index){
    this.data[index].open = !this.data[index].open;

    if(this.automaticClose && this.data[index].open){
      this.data.filter((item, itemIndex)=> itemIndex != index)
      .map(item => item.open = false)
    }
  }

  toggleItem(index, childIndex){
    this.data[index].children[childIndex].open = !this.data[index].children[childIndex].open;
  }

  automaticClose = false;

  data = [
      {
        name:"One",
        open: false
      },
      {
        name: 'Two', 
        children: [
          {name:'Two O One',information:'Information Two O One', open: false},
          {name:'Two O Two', information:'Information Two O Two', open: false}
        ],
        open: false
      },
      {
        name: 'Three', 
        children: [
          {
            name:'Three O One',information:'Information Three O One', open: false,
            children: [
              {name:'Three O One O One',information:'Information Three O One O One', open: false},
              {name:'Three O One O Two', information:'Information Three O One O Two', open: false}
            ],
          },
          {
            name:'Three O Two', information:'Information Three O Two', open: false,
            children: [
              {name:'Three O Two O One',information:'Information Three O Two O One', open: false},
              {name:'Three O Two O Two', information:'Information Three O Two O Two', open: false}
            ],
          }
        ],
        open: false
      }
    ]
}
