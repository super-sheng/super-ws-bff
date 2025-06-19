
import { join } from 'path'
import { assignIn } from 'lodash'

let config = {
  viewDir: join(__dirname, '..', 'views'),
  staticDir: join(__dirname, '..', 'assets'),
  port: 8081,
  memory: false,
}

if (process.env.NODE_ENV === 'production') {
  let prodConfig = {
    port: 8082,
    memory: 'memory',
  };
  config = assignIn(config, prodConfig);
}

export default config



