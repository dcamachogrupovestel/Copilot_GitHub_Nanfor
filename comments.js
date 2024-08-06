//Create web server
const express = require('express');
const app = express();

//Create a port
const port = process.env.PORT || 3000;

//Create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

//Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//End of comments.js