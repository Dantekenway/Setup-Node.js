import express from 'express';
import '@controllers/UserControllers';

const app = express();
app.get('/', (request, response) => {
  return response.json({
   message:' Hello World'
  })
})
app.listem(3333);