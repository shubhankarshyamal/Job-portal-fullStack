/**
 * Angular imports
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Application components
 */
import { JobDetail } from '../job-detail/job-detail';

@Component({
  selector: 'lib-job-list',
  standalone: true,
  imports: [CommonModule, JobDetail],
  templateUrl: './job-list.html',
  styleUrls: ['./job-list.css'],
})
export class JobList {
  /**
   * data variables
   */
  @Input() jobs: any[] = [];
  @Input() isLoggedIn: boolean = false;
  @Output() deleteJob = new EventEmitter<number>();
  expandedJobId: number | null = null;

  //   {
  //     id: 1,
  //     title: 'Software Development Engineer (SDE)',
  //     company: 'Docquity',
  //     location: 'Gurgaon, India',
  //     type: 'Full-time',
  //     description:
  //       'Design and maintain scalable backend systems using Java Spring Boot and AWS.',
  //     skills: ['Java', 'Spring Boot', 'AWS'],
  //   },
  //   {
  //     id: 2,
  //     title: 'Frontend Developer',
  //     company: 'Meta',
  //     location: 'Remote',
  //     type: 'Full-time',
  //     description:
  //       'Build responsive UIs using Angular and TypeScript, ensuring performance and accessibility.',
  //     skills: ['Angular', 'TypeScript', 'RxJS'],
  //   },
  // ];

  toggleExpand(jobId: number): void {
    this.expandedJobId = this.expandedJobId === jobId ? null : jobId;
  }

  public onDelete(jobId: number): void {
    if (confirm('Are you sure you want to delete this job?')) {
      this.deleteJob.emit(jobId);
    }
  }

}
