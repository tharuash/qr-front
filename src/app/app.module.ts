import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { QrProfilesComponent } from './components/qr-profiles/qr-profiles.component';
import { ChatComponent } from './components/chat/chat.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { QrScanComponent } from './components/qr-scan/qr-scan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    UserInfoComponent,
    QrProfilesComponent,
    ChatComponent,
    AdminDashboardComponent,
    QrScanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
