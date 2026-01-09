const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://jarvis:MySzOVSaZspgHlRm@cluster0.yiasqur.mongodb.net/Reja";

  // TCP - doimiq bog'lanish
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection");
    else {
      console.log("MongoDB successful connection");
      module.exports = client;   // client.db() - QALAM

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 4003;
      server.listen(PORT, function () {
        console.log(
          `The server is running on ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
