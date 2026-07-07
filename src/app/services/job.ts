import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

// When Firebase is added, inject Firestore here and replace the in-memory array
// import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class JobService {
  private jobs: Job[] = [
    { id: '1', company: 'Acme Corp', role: 'Frontend Developer', status: 'applied', appliedDate: '2025-01-10' },
    { id: '2', company: 'Globex', role: 'Angular Engineer', status: 'interview', appliedDate: '2025-01-15' },
  ];

  getJobs(): Job[] {
    return this.jobs;
  }

  addJob(job: Job): void {
    this.jobs.push({ ...job, id: Date.now().toString() });
  }
}
