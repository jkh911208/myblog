const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => res.send('API running'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));