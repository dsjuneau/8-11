const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("client/build"));
}

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/somedatabase", {
    useNewUrlParser: true
  })
  .then(() => console.log("Database connected ..."));

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
