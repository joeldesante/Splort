const express = require("express");

const api = express();

api.post("/api/shorten", function(req, res) {
    res.send("Done.");
});

api.get("/:short", function (req, res) {
    res.redirect("https://google.com")
});

api.listen(8080, () => {
    console.log("Going...")
})