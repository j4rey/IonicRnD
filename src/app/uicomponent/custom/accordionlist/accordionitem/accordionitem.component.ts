import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordionitem',
  templateUrl: './accordionitem.component.html',
  styleUrls: ['./accordionitem.component.scss'],
})
export class AccordionitemComponent implements OnInit {

  @Input() item: any;
  constructor() { }

  ngOnInit() {}

}
