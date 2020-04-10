import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupLawyerComponent } from './signup-lawyer/signup-lawyer.component';
import { SignupClientComponent } from './signup-client/signup-client.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AskquestionComponent } from './askquestion/askquestion.component';
import { EditprofileClientComponent } from './editprofile-client/editprofile-client.component';
import { AskedquestionClientComponent } from './askedquestion-client/askedquestion-client.component';
import { LawyerprofileClientComponent } from './lawyerprofile-client/lawyerprofile-client.component';
import { ReplyquestionLawyerComponent } from './replyquestion-lawyer/replyquestion-lawyer.component';
import { EditprofileLawyerComponent } from './editprofile-lawyer/editprofile-lawyer.component';
import { FindlawyerClientComponent } from './findlawyer-client/findlawyer-client.component';
import { ChooselawyerClientComponent } from './chooselawyer-client/chooselawyer-client.component';
import { HomeComponent } from './home/home.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from "ngx-bar-rating";
import { NgxStarsModule } from 'ngx-stars';
import { RateLawyerComponent } from './rate-lawyer/rate-lawyer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChatComponent } from './chat/chat.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LawyerChatComponent } from './lawyer-chat/lawyer-chat.component';
import { SavedlawyersClientComponent } from './savedlawyers-client/savedlawyers-client.component';
import { EndorseattorneyComponent } from './endorseattorney/endorseattorney.component';
import { ShowlawyerLawyerComponent } from './showlawyer-lawyer/showlawyer-lawyer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthInterceptor } from './services/auth-interceptor'

import { LawyerReviewsComponent } from './lawyer-reviews/lawyer-reviews.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { PlaceOrderComponent  } from './place-order/place-order.component';
import { MyOrderComponent  } from './my-order/my-order.component';
import { VideoCallComponent } from './video-call/video-call.component';
import { DivorceComponent } from './divorce/divorce.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupLawyerComponent,
    SignupClientComponent,
    AskquestionComponent,
    EditprofileClientComponent,
    AskedquestionClientComponent,
    LawyerprofileClientComponent,
    ReplyquestionLawyerComponent,
    EditprofileLawyerComponent,
    FindlawyerClientComponent,
    ChooselawyerClientComponent,
    HomeComponent,
    RateLawyerComponent,
    HeaderComponent,
    FooterComponent,
    ChatComponent,
    ReviewsComponent,
    LawyerChatComponent,
    SavedlawyersClientComponent,
    EndorseattorneyComponent,
    ShowlawyerLawyerComponent,
    ForgotPasswordComponent,
    LawyerReviewsComponent,
    ViewOrderComponent,
	PlaceOrderComponent,
	MyOrderComponent,
	VideoCallComponent,
	DivorceComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BarRatingModule,
    NgxStarsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
