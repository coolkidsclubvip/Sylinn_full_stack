var admin = require("firebase-admin");
const config = require("./config");
const dbStartup = require("debug")("app:db");
const debugError500 = require("debug")("app:Error500");
try {
  dbStartup("Attempting database connection...");
  var serviceAccountKey = require(config.db.serviceAccountKey);


  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
    storageBucket: config.db.storageBucketUrl,
  });
 

  const db = admin.firestore();
  const bucket = admin.storage().bucket();

  // DB Ping function test (only works when there is 1 collection or more)
  const dbPing = db.listCollections().then((collections) => {
    dbStartup("Connected to Cloud Firestore");
    for (let collection of collections) {
      dbStartup(`Found db collection: ${collection.id}`);
    }
  }).catch((error) => {console.error("DB Ping failed:", error)});

  // export the DB methods
  module.exports = { db, bucket, dbPing };
} catch (err) {
  debugError500(err);
}
