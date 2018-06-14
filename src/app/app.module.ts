import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { UserService } from './shared/user.service';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toast;
import { UserActiveComponent } from './users/user-active/user-active.component'r';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        ListUsersComponent,
        SignUpCompone,
        UserActiveComponentnt
    ],
    providers: [
        AuthGuard,
        UserService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }