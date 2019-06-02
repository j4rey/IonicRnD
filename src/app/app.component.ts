import { Component, OnDestroy } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AppMenuService } from './menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent implements OnDestroy{
  ngOnDestroy(): void {
    if(this.menuSubscription)
    this.menuSubscription.unsubscribe();
  }
  public appPages = [
  // [
  //   {
  //     title: 'Home',
  //     url: '/home',
  //     icon: 'home',
  //     open: false
  //   },
  //   {
  //     title: 'List',
  //     url: '/list',
  //     icon: 'list',
  //     open: false,
  //     children: [
  //       {
  //         title: 'Home',
  //         url: '/home',
  //         icon: 'home',
  //         open: false
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Components',
  //     url: '/uicomponents',
  //     icon: 'cube',
  //     open: false,
  //     children: [
  //       {
  //         title: 'Output',
  //         url: '/uicomponents/outputcomponents',
  //         icon: 'list',
  //         open: false
  //       },
  //       {
  //         title: 'Layout',
  //         url: '/uicomponents/layoutcomponents',
  //         icon: 'list',
  //         open: false
  //       },
  //       {
  //         title: 'Input',
  //         url: '/uicomponents/inputcomponents',
  //         icon: 'list',
  //         open: false
  //       },
  //       {
  //         title: 'Custom',
  //         url: '/uicomponents/customcomponents',
  //         icon: 'list',
  //         open: false,
  //         children: [
  //           {
  //             title: 'AccordionList',
  //             url: '/uicomponents/customcomponents/accordionlist',
  //             icon: 'list',
  //             open: false
  //           }
  //         ]
  //       }
  //     ]
  //   },
  ];

  menuSubscription: Subscription;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private router: Router,
    private menuService: AppMenuService
  ) {
    this.initializeApp();
    this.menuSubscription = this.menuService.OnMenuUpdated
    .subscribe((x:any[])=>{
      this.appPages = x;
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  toggleSection(index){
    this.appPages[index].open = !this.appPages[index].open;

    if(this.automaticClose && this.appPages[index].open){
      this.appPages.filter((item, itemIndex)=> itemIndex != index)
      .map(item => item.open = false)
    }
    event.stopPropagation();
  }

  toggleItem(index, childIndex){
    this.appPages[index].children[childIndex].open = !this.appPages[index].children[childIndex].open;
    event.stopPropagation();
  }

  automaticClose = true;

  gotoRoute(url: string){
    this.router.navigate([url]);
    this.menuCtrl.close().then(x=>console.log(x));
  }
}
