import schedule, { Job } from 'node-schedule';

class Scheduler {
    init(): Job[] {
        const jobs: Job[] = [];
        const job = schedule.scheduleJob('*/10 * * * * *', (startedAt) => console.log('🍩', startedAt));
        jobs.push(job);
        return jobs;
    }
}

export default Scheduler;