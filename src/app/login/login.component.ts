import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { T3UsersLogin } from '../shared/user.model';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    password: string;
    username: string
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userServices: UserService) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit(username: string, password: string) {
        this.userServices.userAuthentication(username, password).subscribe((data: T3UsersLogin) => {
            if (data.Password === password) {
                localStorage.setItem("token", username);
                this.router.navigate(['']);
            }
        })
    }
}
