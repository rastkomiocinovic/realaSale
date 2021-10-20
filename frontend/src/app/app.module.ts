import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationRequestsComponent } from './registration-requests/registration-requests.component';
import { UserCreationComponent } from './admin/user-creation/user-creation.component';
import { EditUsersComponent } from './admin/edit-users/edit-users.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { UpdateInfoComponent } from './user/update-info/update-info.component';
import { UserAddComponent } from './realestate/user-add/user-add.component';
import { CardComponent } from './realestate/card/card.component';
import { UserRealestateComponent } from './realestate/user-realestate/user-realestate.component';
import { EditComponent } from './realestate/edit/edit.component';
import { PromotedRealestateComponent } from './realestate/promoted-realestate/promoted-realestate.component';
import { SearchRealestateComponent } from './realestate/search-realestate/search-realestate.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RealestateSlideComponent } from './realestate/realestate-slide/realestate-slide.component';
import { AgentViewComponent } from './realestate/agent-view/agent-view.component';
import { ViewRealestateComponent } from './realestate/view-realestate/view-realestate.component';
import { AgentGraphsComponent } from './agent-graphs/agent-graphs.component';
import { ChartsModule } from 'ng2-charts';
import { UserSalesComponent } from './user-sales/user-sales.component';
import { AgentSalesComponent } from './agent-sales/agent-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    RegistrationRequestsComponent,
    UserCreationComponent,
    EditUsersComponent,
    ChangePasswordComponent,
    UpdateInfoComponent,
    UserAddComponent,
    CardComponent,
    UserRealestateComponent,
    EditComponent,
    PromotedRealestateComponent,
    SearchRealestateComponent,
    HomePageComponent,
    RealestateSlideComponent,
    AgentViewComponent,
    ViewRealestateComponent,
    AgentGraphsComponent,
    UserSalesComponent,
    AgentSalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
