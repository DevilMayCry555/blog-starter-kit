// import { createServer } from "node:http";
const { createServer } = require("node:http");
// import next from "next";
const next = require("next");
// import { Server } from "socket.io";
const { Server } = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();
const users = [];
app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    // ...
    console.log("connection", socket.id);
    users.push(socket);
    socket.on("hello", (value) => {
      users.forEach((it) => {
        it.emit("qwer", value);
      });
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
