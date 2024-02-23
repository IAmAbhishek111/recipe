import { Component, OnInit } from '@angular/core';
import { AuthService } from './Auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // navbarCollapsed = true;

  constructor(private authService: AuthService , private loggingService : LoggingService) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.loggingService.printLog("hello from app component")
  }
}
