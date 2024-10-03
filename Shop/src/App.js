const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, '../public'))); // Ajustez le chemin vers le dossier public

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/home.html')); // Renvoie home.html
});

app.get("/who-we-are", (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/WhoWeAre.html')); // Renvoie WhoWeAre.html
});

app.get("/get-in-touch", (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/linkss.html')); // Renvoie links.html
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
