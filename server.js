// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("back/back.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.get("/", function (req, res) {
  res.render("index", {});
});

// server.use(
//   // Add custom route here if needed
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//   })
// );
server.use(router);
// Listen to port
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
