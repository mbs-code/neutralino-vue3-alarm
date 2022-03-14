import { Job, RecurrenceSpecObjLit, scheduleJob } from 'node-schedule'

type fire = (fireDate: Date) => void

export const useSchedule = () => {
  const jobs: Job[] = []

  const addJob = (cron: RecurrenceSpecObjLit | string, callback: fire) => {
    const job = scheduleJob(cron, callback)
    jobs.push(job)
    return job
  }

  const everySeconds = (callback: fire) => {
    return addJob('* * * * * *', callback)
  }

  const clear = () => {
    for (const job of jobs) {
      job.cancel()
    }
  }

  return {
    addJob,
    everySeconds,
    clear,
  }
}
