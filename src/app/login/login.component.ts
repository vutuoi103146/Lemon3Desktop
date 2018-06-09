import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit() {
        console.log("home")
        localStorage.setItem("currentUser","login");
        this.router.navigate(['']);
    }
}
