module.exports = {
  // port env
  port: process.env.PORT,

  // database env
  db: {
    serviceAccountKey: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    storageBucketUrl: process.env.STORAGE_BUCKET_URL,
  },

  //auth env
  authentication: {
    jwtSecret: process.env.JWT_SECRET,
  },

  // cor whitelist
  corsAllowedOptions:[
    process.env.CORS_ALLOWED_OPTION_1,
    process.env.CORS_ALLOWED_OPTION_2,
  ]
};