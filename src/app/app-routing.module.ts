import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminManageQuestionsComponent } from './admin-manage-questions/admin-manage-questions.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { QuestionComponent } from './question/question.component';
// import { Register } from './registration';
// import { RegistrationComponent } from './registration/registration.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { RegistrationComponent } from './user-registration/user-registration.component';
import { UserReportComponent } from './user-report/user-report.component';
import { UserloginComponent } from './userlogin/userlogin.component';



const routes: Routes = [
  {
    path:'',redirectTo:'homeLink',pathMatch:'full'
  },
  {
    path:'homeLink',component:HomeComponent,
    
  },
  
  {
    path:'aboutus',component:AboutusComponent,
  },
  {
    path:'userlogin',component:UserloginComponent
  },
  {
    path:'instructions',component:InstructionsComponent
  },
  {
    path:'subjectList',component:SubjectListComponent
  },
  {
    path:'showQuestion',component:QuestionComponent
  },
  {
    path:'showResult',component:ShowResultComponent
  },
  {
    path:'showReport',component:UserReportComponent
  },
  {
    path:'admin_login' ,component:AdminLoginComponent
  },
  {
    path:'userNavBar',component:MenuBarComponent
  },
  
  {path:'search_students', component:AdminSearchComponent},
  {path:'admin_dashboard', component:AdminDashboardComponent},
  {path:'add_question',component:AdminManageQuestionsComponent},
  {
    path:'register',component:RegistrationComponent
  }
  
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
