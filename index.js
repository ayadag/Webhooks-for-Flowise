const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;



app.post("/api/v1/prediction/49a1fa06-e4df-4218-9911-008da1eb5620", (req, res) => {

  res.send({
    "body": {
        "text": "The title of this document is \"The Art of Goal Setting: Achieving Success through Personal Development.\""
    },
    "headers": {
        "date": "Fri, 12 Jan 2024 16:11:40 GMT",
        "content-type": "application/json; charset=utf-8",
        "content-length": "125",
        "connection": "keep-alive",
        "cf-ray": "8446acfaaeebc37f-SEA",
        "cf-cache-status": "DYNAMIC",
        "access-control-allow-origin": "*",
        "content-encoding": "gzip",
        "etag": "W/\"75-wDctMeyWBbIi6cRil2J9VwW/l7o\"",
        "vary": "Accept-Encoding",
        "rndr-id": "47972f78-3a7e-4899",
        "x-render-origin-server": "Render",
        "set-cookie": [
            "_cfuvid=EvhFQkYMrrvvB3Q4fIlBC6.c6AghnuHY0stprwbZsYI-1705075900764-0-604800000; path=/; domain=.flowise.chatbasebot.com; HttpOnly; Secure; SameSite=None"
        ],
        "server": "cloudflare",
        "alt-svc": "h3=\":443\"; ma=86400"
    }
})
 
})
app.listen(port, () => console.log("server running"));
