const express = require("express"); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 3000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get("/", function (req, res) {
  res.render("index", {});
});
// export module
module.exports = app;
