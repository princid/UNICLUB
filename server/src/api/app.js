const express = require("express");
const logger = require("morgan");
const dropbox = require("dropbox");
const fileUpload = require("express-fileupload");
const session = require("cookie-session");

const handlers = require("./handlers");
const dbConfig = require("../db/dbConfig");
const config = require("../config/env");
const eventRouter = require("./routes/event");
const clubRouter = require("./routes/club");
const imageRouter = require("./routes/image");
const presidentRouter = require("./routes/president");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const path = require("path");

dbConfig.connectDB();

// app config
const app = express();

const dropboxClient = new dropbox.Dropbox({
  accessToken: config.DROPBOX_API_KEY,
});

app.locals = { dropbox: dropboxClient };

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));

app.set("sessionMiddleware", session({ secret: config.SECRET_MSG }));
app.use((...args) => app.get("sessionMiddleware")(...args));

//api routes
app.get("/api/health-check", handlers.healthCheckHandler);

app.use("/api/president", presidentRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/event", eventRouter);
app.use("/api/club", clubRouter);
app.use("/api/image", imageRouter);

if (config.NODE_ENV === "production") {
  app.use("/", express.static("../build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("../build/index.html"));
  });
}

module.exports = app;
