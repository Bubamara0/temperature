const path = require('path')  // pas besoin de l'installer car installé automatiquement avec node js
const express = require('express');
require("dotenv").config();

const geoCode = require("../utils/geoCode.js")

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public")

 
// requete entrante GET / ==> index.html 
// express.static évite d'écrire toutes les routes et va chercher dans le dossier public

// j'utilise le moteur de template ejs
app.set("view engine", "ejs");


app.use(express.static(publicDirectoryPath));


// je lui demande de renvoyer un page 
// index.ejs remplace index.html que nous pouvons supprimer
app.get("", (req, res) => {
   
    res.render("index", {
        title : "Weather App"
        
    });
});


app.get("/temperature/:city", async (req, res) => {
    console.log(req.params.city);
    const city = req.params.city
    const temperature = await geoCode(city)
    console.log(temperature)
    res.render("temperature", {
        temperature, 
        city
    })
})












// const users = [
//     { id: 1, name:"Nissim", city: "Paris"},
//     { id: 2, name:"Amel", city: "Marseille"},
//     { id: 3, name:"Chouaib", city: "Montpellier"},
//     { id: 4, name:"Assia", city: "Poitiers"}
// ]

// // /endpoints = routes
// // request, response
// app.get("/", (req, res) => {
//     res.send('Welcome to my website');
// });

// app.get("/temperature", (req, res) => {
//     res.send("La température à Paris est de 12°C")
// })

// app.get("/about", (req, res) => {
//     res.send("Je m'appelle Timothée")
// })

// // renvoi de data
// app.get("/users", (req, res) => {
//     res.send(users);
// })

// app.get("/courses", (req, res) => {
//     res.send([1, 2, 3]);
// });

// // renvoi de html
// app.get("/html", (req, res) => {
//     res.send("<h2>Calcul de température</h2>")
// });

// ou on peut intégrer une structure html en `` mais ça devient vite trop long
// on peut donc intégrer directement un chemin vers la page html 




const port = 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));



// const http = require("http");

// const server = http.createServer((req, res) => {
//     if(req.url === "/"){
//         res.end("welcome to my homePage");
//     }
//     if (req.url === "/contact"){
//         res.end("Welcome to the contact page");
//     }
// });

// server.listen(3000);