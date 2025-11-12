import { Component, EventEmitter, Output } from '@angular/core';
import { JobService } from '../core/services/job.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-job.html',
  styleUrls: ['./create-job.scss'],
})
export class CreateJob {
  @Output() close = new EventEmitter<void>();
  @Output() jobCreated = new EventEmitter<any>();

  job = {
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    skills: '',
    type: '',
    posted_date: new Date()
  };

  constructor(
    private jobService: JobService
  ) {}

  createJob() {
    this.jobService.createJob(this.job).subscribe({
      next: (response) => {
        this.jobCreated.emit(response);
        this.closePopup();
      },
      error: (err) => console.error(err)
    });
  }

  closePopup() {
    this.close.emit();
  }
}
