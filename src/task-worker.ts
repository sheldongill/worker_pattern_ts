import { Worker, Queue } from "bullmq";
import config from "./config";

const webhooksQueue = new Queue("webhooks", { connection: config.connection });

/**
 *  This worker performs some task based on the job.name.
 *  When the task is completed (in this case we just perform a console.log)
 *  we add a new job to the webhooks queue, which will be used to notify
 *  the user that the task has been completed
 */

export const taskWorker = new Worker<{ userId: string; task: any }>(
  config.taskQueueName,
  async (job) => {
    console.log(`Processing job ${job.id} of type ${job.name}`);
    const answer = Math.floor(Math.random() * 11);
    await new Promise((r) => setTimeout(r, answer * 1000));

    const result = `Result is ${answer} from task ${job.name} performed for UserId:${job.data.userId} with ID ${job.id}`;

    return webhooksQueue.add(
      job.name,
      { userId: job.data.userId, result },
      {
        attempts: config.maxAttempts,
        backoff: { type: "exponential", delay: config.backoffDelay },
      }
    );
  },
  { connection: config.connection }
);
