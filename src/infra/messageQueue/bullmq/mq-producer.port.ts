export interface MQProducerPort {
  addJob: <T>(data: T) => Promise<void>;
}
