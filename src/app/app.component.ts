import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  menus = [
    { title: 'Evie & Co 인사말', icon: 'home', url: '/' },
    { title: '갤러리', icon: 'photos', url: '/tabs/tab2' },
    { title: '서비스 및 비용 안내', icon: 'help', url: '/tabs/tab5' },
    { title: '연락처', icon: 'help', url: '/' },
    { title: '오시는길', icon: 'help', url: '/' },
    { title: '홈페이지', icon: 'help', url: '/' },
    { title: '페이스북', icon: 'help', url: '/' }
];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

