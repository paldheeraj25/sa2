import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NotificationService } from "../../utils/notification.service";
import { AuthService } from "../../../providers/auth/auth.service";

declare var $: any;

@Component({
  selector: 'sa-logout',
  template: `
<div id="logout" (click)="logout()" class="btn-header transparent pull-right">
        <span> <a routerlink="/auth/login" title="Sign Out" data-action="userLogout"
                  data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i
          class="fa fa-sign-out"></i></a> </span>
    </div>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  public error: Boolean = false;
  constructor(private router: Router,
    private notificationService: NotificationService,
    private authService : AuthService) { }


  logout() {
    window.localStorage.clear();
    
    // This should happen
    // this.authService.logout().subscribe(result => {
    //   this.error = false;
    //   localStorage.setItem('key', result.token);
    //   this.router.navigate(['/dashboard']);
    // }, error => {
    //   this.error = true;
    // });
    
    this.router.navigate(['/auth/login'])
  }

  ngOnInit() {

  }
}
