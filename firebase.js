var admin = require("firebase-admin");
require("dotenv").config();
var serviceAccount = JSON.parse(process.env.key);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
db=admin.firestore();
module.exports=db;
