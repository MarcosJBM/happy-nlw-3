import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

// :Parametrô
app.get('/users', (request, response) => {});

app.listen(3333);
