import { Component, inject } from '@angular/core';
import { JobService } from '../../services/job';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  private jobService = inject(JobService);
  jobs: Job[] = this.jobService.getJobs();
}
