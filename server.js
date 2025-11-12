import express from "express";
import config from "./config";
//importing router from routes/
import router from "./routes/index.js";

const app = express();

app.use(express.json());

// Serve static files from public directory
app.use(express.static("public"));

// Root route - serve HTML
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

// Users page route
app.get("/users", (req, res) => {
  res.sendFile("users.html", { root: "public" });
});

//using the imported router to handle all requests
app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
