const express = require("express");
const app = express();

const path = require("path");
const root = "../public";

app.get("/", (req, res) => {
    res.sendFile("index.html", { root });
});

app.get("/about", (req, res) => {
    res.sendFile("about.html", { root });
});

app.get("/contact-me", (req, res) => {
    res.sendFile("contact-me.html", { root });
});

app.get("*", (req, res) => {
    res.sendFile("404.html", { root });
});

app.listen(8080);