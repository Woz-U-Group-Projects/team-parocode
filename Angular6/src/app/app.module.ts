 // built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 // components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
 // routes
import { appRoutes } from './routes';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { PostComponent } from './post/post.component';
 // other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import {MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserDashboardComponent,
    SignInComponent,
    PostComponent,
    BannerComponent,
    HeaderComponent,
    TeamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [
    MDBSpinningPreloader,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
