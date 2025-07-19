const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = 3000;

const R_Film = require('./routes/R_Film');
const R_Don = require('./routes/R_don');
//const R_Review = require('./routes/R_Review');
const review = require('./routes/review');
const R_ajoute = require('./routes/R_ajoute');


app.use(cors({
  origin: 'http://localhost:3001'  // Ton front React sur ce port
}));

app.use(bodyParser.json());

// routes
//app.use('/review', R_Review);
app.use('/don', R_Don);
app.use('/films', R_Film);
app.use('/review', review);
app.use('/ajouter', R_ajoute);



app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
