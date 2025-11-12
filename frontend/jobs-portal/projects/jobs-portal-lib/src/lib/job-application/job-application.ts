/*
  Angular core modules
*/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*
  Angular router & HTTP
*/
import { ActivatedRoute, Router } from '@angular/router';

/*
  Application services
*/
import { Job } from '../services/job.service';
import { ApplicationService } from '../services/application.service';


@Component({
  selector: 'lib-job-application',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-application.html',
  styleUrls: ['./job-application.css'],
})
export class JobApplication implements OnInit {
  jobId!: string;
  job: any = null;
  submitting: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  application = {
    jobId: '',
    name: '',
    email: '',
    message: ''
  };

  constructor(
    private route: ActivatedRoute, 
    private jobService: Job,
    private applicationService: ApplicationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id') || '';
    this.application.jobId = this.jobId;
    this.fetchJobDetails();
  }


    fetchJobDetails(): void {
    this.jobService.getJobById(this.jobId).subscribe({
      next: (data) => (this.job = data),
      error: (err) => console.error('Error fetching job details:', err),
    });
  }

 submitApplication(): void {
    this.submitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.applicationService.submitApplication(this.application).subscribe({
      next: (res) => {
        this.successMessage = `Your application for "${this.job?.title}" has been submitted successfully!`;
        this.submitting = false;
        /**
         * form reseting 
         */
        this.resetForm();
        this.redirectTorul('/job-portal');

      },
      error: (err) => {
        console.error('Error submitting application:', err);
        this.errorMessage = 'Failed to submit your application. Please try again.';
        this.submitting = false;
      }
    });
  }

  public resetForm(){
        this.application.jobId = '';
        this.application.name = '';
        this.application.email = '';
        this.application.message = '';
  }

  public redirectTorul(url: string){
      this.router.navigate([url]);
  }
}
