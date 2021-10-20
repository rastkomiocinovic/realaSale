import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUsersComponent } from './admin/edit-users/edit-users.component';
import { UserCreationComponent } from './admin/user-creation/user-creation.component';
import { AgentGraphsComponent } from './agent-graphs/agent-graphs.component';
import { AgentSalesComponent } from './agent-sales/agent-sales.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AgentViewComponent } from './realestate/agent-view/agent-view.component';
import { EditComponent } from './realestate/edit/edit.component';
import { UserAddComponent } from './realestate/user-add/user-add.component';
import { UserRealestateComponent } from './realestate/user-realestate/user-realestate.component';
import { ViewRealestateComponent } from './realestate/view-realestate/view-realestate.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationRequestsComponent } from './registration-requests/registration-requests.component';
import { UserSalesComponent } from './user-sales/user-sales.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { UpdateInfoComponent } from './user/update-info/update-info.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "admin/registration_requests", component: RegistrationRequestsComponent},
  {path: "admin/user_creation", component: UserCreationComponent},
  {path: "admin/edit_users", component: EditUsersComponent},
  {path: "user/change_password", component: ChangePasswordComponent},
  {path: "user/update_info", component: UpdateInfoComponent},
  {path: "realestate/user_add", component: UserAddComponent},
  {path: "realestate/user_realestate", component: UserRealestateComponent},
  {path: "realestate/edit/:reId", component: EditComponent },
  {path: "realestate/agent_realestate", component: AgentViewComponent},
  {path: "realestate/view/:reId", component: ViewRealestateComponent},
  {path: "agent_graphs", component: AgentGraphsComponent},
  {path: "user_sales", component: UserSalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
