import express, { response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
/* import dotenv from 'dotenv';
import cloudinaryFramework from 'cloudinary'
import multer from 'multer'
import cloudinaryStorage from 'multer-storage-cloudinary'

dotenv.config();

const cloudinary = cloudinaryFramework.v2; 
cloudinary.config({
  cloud_name: 'dslu94lzy', // what I get from cloudinary
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = cloudinaryStorage({
  cloudinary,
  params: {
    folder: 'noteImages',
    allowedFormats: ['jpg', 'png', 'jpeg'],
    transformation: [{ width: 300, height: 300, crop: 'limit' }],
  },
})
const parser = multer({ storage }) */


const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/pregnancy-week-by-week"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 15
  },

  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
    unique: true
  }
})

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }
  // this will hash the password after signup details are validated
const salt = bcrypt.genSaltSync();
user.password = bcrypt.hashSync(user.password, salt);

// to continue with the save
next();
}
)

// for signup and login
const User = mongoose.model('User', userSchema);

// for notes
const Note = mongoose.model('Note', {
  newNote: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 200,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
/*   noteImage: {
    name: String,
    imageURL: String
  } */
})


// defines the port where the app will be run on
const port = process.env.PORT || 8080
const app = express()
const listEndpoints = require('express-list-endpoints')

// function that expects the users accessToken and will validate access to
// the authencticated endpoint
const authenticateUser = async (request, response, next) => {
  const user = await User.findOne({ accessToken: request.header('Authorization') });

  if (user) {
    request.user = user;
    next();
  } else {
    response.status(401).json({ message: 'Sorry, authentication failed' });
  }
}

// add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// middleware function
app.use((request, response, next) => {
  if (mongoose.connection.readyState === 1) {
    next()
  } else {
    response.status(503).json({ error: 'Service unavailable' })
  }
})

// HOMEPAGE
app.get('/', (request, response) => {
  if (response) {
    response.status(200).send(listEndpoints(app)) // will display all endpoints 
  } else {
    response.status(404).send("Sorry, no endpoints found")
  }
})

// SIGNUP ENDPOINT
app.post('/signup', async (request, response) => {
  try {
    const { username, email, password } = request.body;

    // this will create a new user and store username,
    // email and password in the datatbase
    const user = await new User({
      username,
      email,
      password,
    }).save();

    // signup successful (but user will not be automatically logged in)
    response.status(200).json({userID: user._id, accessToken: user.accessToken}); 
  }
  catch (err) {
    // signup failed
    response.status(400).json({ message: 'Sorry, could not create user', errors: err });
  }
})

// LOGIN ENDPOINT
// this endpoint expects username and password from a signed up user
app.post('/login', async (request, response) => {
  try {
    const { username, password } = request.body;
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      // login succesful
      response.status(200).json({ userId: user._id, accessToken: user.accessToken });
    } else {
      // error that's thrown if user is signed up but login details are incorrect
      throw 'Inccorect username or password';
    }
  } catch (err) {
      // error if a user is trying to login but is not yet signed up
      response.status(404).json({ error: 'Sorry, user does not exist' });
    }
});

// AUTHENTICATED ENDPOINT after login
// this endpoint is only accessible after user has logged in with
// valid username, password and accessToken
app.get('/login/:id/member', authenticateUser);
app.get('/login/:id/member', (request, response) => {

  const member = `Welcome, ${request.user.username}, you are now logged in.`
  response.status(201).json(member)
});

// GET notes
app.get('/notes', async (request, response) => {
  try {
    const notes = await Note.find()
    .sort({ createdAt: 'desc' })
    .exec()
    response.status(201).json(notes)
  }
  catch (err) {
    response.status(400).json({message: 'Sorry, could not load notes' })
  }
})

// POST a new note
app.post('/notes', async (request, response) => {
  try {
    const newNote = await new Note(request.body).save()
    response.status(200).json(newNote)
  }
  catch (err) {
    console.log(err)
    response.status(400).json({ message: 'Sorry could not save note to the database', errors: err.errors
  })
  }
})

// POST image with note
/* app.post('/notes/image', parser.single('image'), async (request, response) => {
	response.json({ imageUrl: request.file.path, imageId: request.file.filename})
})

app.post('/notes/image', parser.single('image'), async (request, response) => {
  try {
    const image = await new Note({ name: request.body.filename, imageUrl: request.file.path }).save()
    response.json(image)
  } catch (err) {
    response.status(400).json({ errors: err.errors })
  }
}) */

// DELETE a note
app.delete('/notes/:notesId', authenticateUser);
app.delete('/notes/:notesId', async (request, response) => {
  try { 
    await Note.deleteOne({ _id: request.params.notesId });
    response.status(200).json({ success: 'Note successfully deleted!' });
  } catch (error) {
    response.status(500).json({ message: 'Could not delete note' });
  };
});




// start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})