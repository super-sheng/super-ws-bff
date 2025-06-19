module.exports = {
  apps: [{
    name: 'ws-course',
    watch: false,
    script: "./dist/app.js",
    instances: 'max',
    exec_mode: 'cluster',
    interpreter: 'ts-node',  // 使用 ts-node 运行
    autorestart: true,
    env: {
      NODE_ENV: 'development',
      TS_NODE_TRANSPILE_ONLY: 'true'
    },
    env_production: {
      NODE_ENV: 'production',
      TS_NODE_TRANSPILE_ONLY: 'true'
    },
    error_file: './logs/ws-app-error.log',
    out_file: './logs/ws-app-out.log',
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
