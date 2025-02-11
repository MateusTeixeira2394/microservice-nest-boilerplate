import { Job } from 'bullmq';

export interface MQConsumerPort {
  process(job: Job): Promise<void>;
  onError(job: Job): void;
}
