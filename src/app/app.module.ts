import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventListPage } from '../pages/event-list/event-list';
import { LoginPage } from '../pages/login/login';
import { ScanPage } from '../pages/scan/scan';
import { ScanResultPage } from '../pages/scan-result/scan-result';
import { Api } from '../providers/api';
import { User } from '../providers/user';

@NgModule({
  declarations: [
    MyApp,
    EventListPage,
    LoginPage,
    ScanPage,
    ScanResultPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventListPage,
    LoginPage,
    ScanPage,
    ScanResultPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Api,
    User]
})
export class AppModule { }
