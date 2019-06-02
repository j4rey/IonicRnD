import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CustomComponent } from './customcomponents.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomComponent,
        pathMatch:'full'
      },
      {
        path: 'accordionlist',
        loadChildren: '../accordionlist/accordion.module#AccordionModule'
      }
    ])
  ],
  declarations: [CustomComponent]
})
export class CustomComponentsModule {}
