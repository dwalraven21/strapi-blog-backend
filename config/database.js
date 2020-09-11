module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        filename: env('DATABASE_URI'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
