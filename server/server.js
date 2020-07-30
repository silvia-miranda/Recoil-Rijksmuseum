const express = require ('express');
const app = express();
const path = require ('path');
//prob need a router here but did not name it

app.use(express.json());

//will need one here for the webpack build file?
//app.use()

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});

//all other routes should go here

//need a global error handler here


app.listen(3000, () => console.log('Listening on port 3000'));