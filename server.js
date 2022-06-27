const app = require('./app');

// const port = process.env.PORT || 3000;
const port = 3007;

app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
