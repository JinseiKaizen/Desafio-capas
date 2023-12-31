const express = require('express');
const app = express();
const PORT = 3001;
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', routes);

app.listen(PORT, ()=>{ console.log(`http://localhost:${PORT}`); });