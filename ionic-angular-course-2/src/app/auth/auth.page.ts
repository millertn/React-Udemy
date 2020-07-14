import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;
  isLogin = true;

  constructor(
    private authentication: AuthService,
    private router: Router,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.authentication.login();
    this.loadingController.create({keyboardClose:true, message: 'Logging in...'}).then( loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading=false;
      })
    })
    this.router.navigateByUrl('places/tabs/discover');
  }

  onSubmit(form:NgForm) {
    console.log(form);
  }
} 
