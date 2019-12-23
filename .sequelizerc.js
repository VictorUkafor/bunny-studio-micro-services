import path from 'path';

export default {
  "config": path.resolve('./server/config', 'config.json'),
  "models-path": path.resolve('./server/models'),
  "migrations-path": path.resolve('./server/migrations')
};