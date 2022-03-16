module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '43ed629378ca7a453a2d375c3ce8c3d7'),
  },
});
