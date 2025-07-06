module.exports = {
  apps: [
    {
      name: 'deskify',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 34911,
        NODE_ENV: 'production',
      },
    },
  ],
};