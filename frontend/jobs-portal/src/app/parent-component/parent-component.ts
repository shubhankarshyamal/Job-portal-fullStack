/**
 *  Angular core modules
 */
import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Application services
 */
import { JobService } from '../core/services/job.service';
import { AuthService } from '../core/services/auth.service';
/**
 * Library / shared components
 */
import { Login } from '../login/login';
import { JobList } from 'jobs-portal-lib';
import { CreateJob } from '../create-job/create-job';


@Component({
  selector: 'app-parent-component',
  imports: [JobList,CommonModule, Login,CreateJob],
  templateUrl: './parent-component.html',
  styleUrls: ['./parent-component.scss'],
})
export class ParentComponent implements OnInit {

  /**
   * Data variables
   */
  public jobs : any[] = [];
  /**
   * boolean variables to show/hide UI
   */
  public toggleJobsListing : boolean = false;
  public toggleJobSubmit : boolean = true;
  public showLogin : boolean = false;
  public isLoggedIn : boolean = false;
  public showCreateJob : boolean = false;
  

  constructor(
    private jobService: JobService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
      this.fetchJobs();
      this.checkLoginStatus();
  }

  public fetchJobs(): void {
    this.jobService.getAllJobs().subscribe({
      next: (data) => (this.jobs = data),
      error: (err) => console.error('Error fetching jobs:', err),
    });
  }

  public viewJobs(){
    this.toggleJobsListing = !this.toggleJobsListing;
  }

  public checkLoginStatus() {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  public onLoginSuccess() {
    this.isLoggedIn = true;
    this.showLogin = false;
  }

  public logout(){
    this.authService.logout();
    this.isLoggedIn = false;
  }

  public onJobCreated(newJob: any) {
    this.fetchJobs();
    this.showCreateJob = false;
  }

  public openJobPostPopup(event: boolean){
    this.showCreateJob = event;
  }

  public deleteJob(jobId: number): void {
  this.jobService.delete(jobId).subscribe({
    next: () => {
      this.jobs = this.jobs.filter(job => job.id !== jobId);
      this.fetchJobs();
      alert('Job deleted successfully');
    },
    error: (err) => console.error('Error deleting job:', err),
  });
}

}
