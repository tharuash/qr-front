import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { QrProfilesComponent } from './components/qr-profiles/qr-profiles.component';
import { ChatComponent } from './components/chat/chat.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { QrScanComponent } from './components/qr-scan/qr-scan.component';


const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'dashboard', component: UserDashboardComponent},
  {path: 'user/:id', component: UserInfoComponent},
  {path: 'profiles/:userId', component: QrProfilesComponent},
  {path: 'chat/:userId', component: ChatComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'scan', component: QrScanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
