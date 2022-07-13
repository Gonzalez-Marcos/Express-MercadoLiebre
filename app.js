const express = require('express');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, "./public");


app.use(express.static(publicPath));
app.use(express.urlencoded());

// Este resolve nos permite enviar cualquier HTML a nuestro sitio web.
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Servidor iniciado en http://localhost:3030")
});