import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent-component/parent-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ParentComponent,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jobs-portal');
}
