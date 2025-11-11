/*
  Angular core modules
*/
import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
  Angular router
*/
import { Router } from '@angular/router';

/*
  Application components
*/
import { JobApplication } from '../job-application/job-application';


@Component({
  selector: 'lib-job-detail',
  standalone: true,
  imports: [CommonModule,JobApplication],
  templateUrl: './job-detail.html',
  styleUrls: ['./job-detail.css'],
})
export class JobDetail {
  /**
   * data fields
   */
  @Input() job: any;
  public skillsArray: string[] = [];

  /**
   * toggle ui fields
   */
  showForm: boolean = false;

  constructor(
    private router: Router
  ) {}
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['job'] && this.job?.skills) {
      this.skillsArray = this.job.skills
        .split(',')
        .map((s: string) => s.trim());
    }
  }

  public openForm(jobId: string) {
    this.router.navigate(['/apply', jobId]);
  }
}
