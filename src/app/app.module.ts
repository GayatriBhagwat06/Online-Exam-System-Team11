import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { QuestionComponent } from './question/question.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { UserReportComponent } from './user-report/user-report.component';
// import "@angular/compiler";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminManageQuestionsComponent } from './admin-manage-questions/admin-manage-questions.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    QuestionComponent,
    UserloginComponent,
    InstructionsComponent,
    AboutusComponent,
    HomeComponent,
    SubjectListComponent,
    ShowResultComponent,
    UserReportComponent,
    AdminLoginComponent,
    MenuBarComponent,
    AdminSearchComponent,
    AdminDashboardComponent,
    AdminManageQuestionsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    NgbModule,
    ReactiveFormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
