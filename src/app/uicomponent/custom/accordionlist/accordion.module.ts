import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccordionitemComponent } from './accordionitem/accordionitem.component';
import { AccordionlistComponent } from './accordionlist.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccordionlistComponent
      }
    ])
  ],
  declarations: [AccordionlistComponent,AccordionitemComponent],
  exports: [AccordionlistComponent]
})
export class AccordionModule {}
