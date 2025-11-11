export interface Application {
  id?: number;
  jobId: number;
  applicantName: string;
  email: string;
  resumeUrl: string;
  appliedAt?: string;
}
