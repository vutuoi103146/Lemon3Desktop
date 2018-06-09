import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { ListUsersComponent } from './users/list-users/list-users.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard],children:
        [
            {
                path : 'users',
                component: ListUsersComponent
            },
        ] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);