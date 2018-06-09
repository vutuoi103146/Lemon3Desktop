import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard],children:
        [
            {  path : 'users/list', component: ListUsersComponent},
           
        ] },
    { path: 'login', component: LoginComponent },
    {  path : 'signup', component: SignUpComponent},
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);