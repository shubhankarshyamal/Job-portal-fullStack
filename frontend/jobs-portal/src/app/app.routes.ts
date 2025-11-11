import { Routes } from '@angular/router';
import { ParentComponent } from './parent-component/parent-component';
import { JobDetail,JobApplication } from 'jobs-portal-lib';

export const routes: Routes = [
  { path: '', redirectTo: 'job-portal', pathMatch: 'full' },
  { path: 'job-portal', component: ParentComponent },
  {path: 'job-detail/:id', component: JobDetail},
  {path: 'apply/:id', component: JobApplication}

];
