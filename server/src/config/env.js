const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

module.exports = {
  PORT: process.env.PORT || "3003",
  MONGO_DB_CONNECTION_STRING: process.env.MONGO_DB_CONNECTION_STRING,
  DROPBOX_API_KEY: process.env.DROPBOX_API_KEY,
  SECRET_MSG: process.env.SECRET_MSG,
  NODE_ENV: process.env.NODE_ENV,
};
