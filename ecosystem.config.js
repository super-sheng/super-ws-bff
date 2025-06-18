module.exports = {
  apps: [{
    name: 'ws-course',
    script: './app.ts',
    watch: true,
    exec_mode: 'cluster',
    // interpreter: 'node',    // 使用 Node.js
    instances: 'max',
    interpreter: './node_modules/.bin/ts-node',
    autorestart: true,
    env: {
      NODE_ENV: 'development',
      TS_NODE_PROJECT: './tsconfig.json',
    },
    env_production: {
      NODE_ENV: 'production',
      TS_NODE_PROJECT: './tsconfig.json',
    },
    error_file: './logs/yd-app-error.log',
    out_file: './logs/yd-app-out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss'
  }],

  // deploy : {
  //   production : {
  //     user : 'SSH_USERNAME',
  //     host : 'SSH_HOSTMACHINE',
  //     ref  : 'origin/master',
  //     repo : 'GIT_REPOSITORY',
  //     path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};
