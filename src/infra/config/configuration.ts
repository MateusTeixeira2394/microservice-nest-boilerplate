export default () => ({
  port: parseInt(process.env.PORT || '3000'),
  env: process.env.NODE_ENV || 'development',
  database: {
    postgres: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
    },
  },
  cache: {
    redis: process.env.REDIS_URL,
  },
  messageQueue: {
    redis: process.env.REDIS_URL,
  },
  client: {
    // set the client urls that consume this here
  },
  http: {
    // set the external api urls here
  },
});

export interface DatabaseSecrets {
  host: string;
  port: number;
  user: string;
  pass: string;
  database: string;
}
