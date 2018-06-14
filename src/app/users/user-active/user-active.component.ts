import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-active',
  templateUrl: './user-active.component.html',
  styleUrls: ['./user-active.component.css']
})
export class UserActiveComponent implements OnInit {
  isSuccess: boolean = false;
  msg: string ="";
  constructor(private userService : UserService, private router: ActivatedRoute) { }
  private username : string;
  private keyString : string
  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.username = params["username"];
      this.keyString = params["keyString"];
      this.userService.userActive(this.username, this.keyString).subscribe((data: any) => {
          this.msg ="Account active success."
          this.isSuccess = true;
      },
        (err: Error) => {
          this.msg ="Account active don't success."
          this.isSuccess = false;
        });
  });
  }

}
