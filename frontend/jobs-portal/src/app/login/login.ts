/*
  Angular core modules
*/
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*
  Application services
*/
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {

  @Output() close = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<void>();

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService
  ) {}

login() {
  this.authService.login(this.username, this.password).subscribe({
    next: (res: any) => {
      const token = res?.data?.token;
      if (token) {
        localStorage.setItem('token', token);
        this.close.emit();  
        this.loginSuccess.emit();
      } else {
        this.errorMessage = 'Login failed: token not found';
      }
    },
    error: (err) => {
      this.errorMessage = 'Invalid credentials';
    },
  });
}

  closeModal() {
    this.close.emit();
  }

}
