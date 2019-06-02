import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { UiComponent } from './uicomponent.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: UiComponent,
        pathMatch:'full'
      },
      {
        path: 'outputcomponents',
        loadChildren: '../output/outputcomponents/outputcomponents.module#OutputComponentsModule'
      },
      {
        path: 'layoutcomponents',
        loadChildren: '../layout/layoutcomponents/layoutcomponents.module#LayoutComponentsModule'
      },
      {
        path: 'inputcomponents',
        loadChildren: '../input/inputcomponents/inputcomponents.module#InputComponentsModule'
      },
      {
        path: 'customcomponents',
        loadChildren: '../custom/customcomponents/customcomponents.module#CustomComponentsModule'
      }
    ])
  ],
  declarations: [UiComponent]
})
export class UIComponentsModule {}
