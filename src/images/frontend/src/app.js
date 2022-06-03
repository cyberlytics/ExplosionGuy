const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log("GET /");
  res.sendFile(`/html/index.html`, { root: __dirname + '/static' });
});

app.get('/*', (req, res) => {
  
  console.log(`get ${req.path}`);
  console.log(`${req.params}`)
  res.sendFile(`${req.path}`, { root: __dirname + '/static' });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});