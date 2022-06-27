const app = require('./app');


const port =  3004;

app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
