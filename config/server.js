module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://shielded-headland-61262.herokuapp.com/',
  admin: {
    url: '/',
    serveAdminPanel: false
  },
});
