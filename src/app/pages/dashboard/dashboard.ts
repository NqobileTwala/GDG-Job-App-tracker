import { Component, inject } from '@angular/core';
import { JobService } from '../../services/job';
import { Job } from '../../models/job.model';
import { UserService } from '../../services/user';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  private jobService = inject(JobService);
  private userService = inject(UserService);

  editedJob?: Job;

  jobs = this.jobService.getJobs();

  beginJobEdit(){
    this.editedJob = {
      company: '',
      role: '',
      jobDescription: '',
      jobUpdates: []
    };
  }
    cancelJobEdit(){
      this.editedJob = undefined;
    }

    saveJob(){
      this.jobService.addJob(this.editedJob!);
      this.editedJob = undefined;
      this.jobs = this.jobService.getJobs();
    }
}
