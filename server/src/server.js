const app = require("./api/app");
const env = require("./config/env");

const serverOnStart = () => console.log(`Started Listening at ${env.PORT}....!\n`)

app.listen(env.PORT, serverOnStart);
