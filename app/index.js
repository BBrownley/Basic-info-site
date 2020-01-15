const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req, res) => {

    const q = url.parse(req.url, true);
    let fileName;

    if (q.pathname === "/") {
        fileName = `../public/index.html`;
    } else {
        fileName = `../public/${q.pathname}.html`;
    }

    fs.readFile(fileName, (err, data) => {
        if (err || q.pathName === "/404") {

            data = fs.readFileSync("../public/404.html");

            res.writeHead(404, {"Content-type": "text/html"});
            res.write(data);
            return res.end();
        } else {
            res.writeHead(200, {"Content-type": "text/html"});
            res.write(data);
            return res.end();
        }
    })

}).listen(8080)