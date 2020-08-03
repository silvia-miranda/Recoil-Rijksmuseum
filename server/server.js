const express = require ('express');
const app = express();
const path = require ('path');
const mongoose = require('mongoose')
const userController = require('./controllers/userController');
const MONGO_URI = "mongodb+srv://mirasil:kimono80@cluster0.ilejg.mongodb.net/astro?retryWrites=true&w=majority";


mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'astro',
})
.then(() => console.log('Connected to Mongo DB.'))
.catch(err => console.log(err));
//prob need a router here but did not name it

app.use(express.json());

//will need one here for the webpack build file?
app.use('/build', express.static(__dirname + '/build'));

app.post('/api/login', userController.verifyUser, (req, res) => {
  // what should happen here on successful log in?
  res.status(200)
            .json({ "user": res.locals.user  })
  res.redirect('/search')

});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});

//need a global error handler here

app.listen(3000, () => console.log('Listening on port 3000'));