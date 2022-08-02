import express from 'express';


const app = express();
// eslint-disable-next-line arrow-body-style
app.get('/', (request, response) => {
  return response.json({
    message: ' Hello World',
  })
})
app.listem(3333);
