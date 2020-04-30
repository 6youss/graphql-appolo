const express = require("express");
// const proxy = require("http-proxy-middleware");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Proxy api request
// Optional, if you don't want your add CORS support to your Django app
// app.use(
//   "/api",
//   proxy({
//     target: process.env.API_ROOT_URL,
//     changeOrigin: true,
//     ws: true,
//     pathRewrite: {
//       "^/api": ""
//     }
//   })
// );
function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get("x-forwarded-proto") !== "https" && process.env.NODE_ENV !== "development") {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}
app.use(requireHTTPS);
app.use(express.static(path.join(__dirname, ".")));

// https://facebook.github.io/create-react-app/docs/deployment#serving-apps-with-client-side-routing
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, ".", "index.html"));
});

app.listen(PORT, () => console.log(`Listening on :${PORT}`));
