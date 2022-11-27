const express = require("express");

const President = require("../../db/models/President");

const presidentRouter = express.Router();

presidentRouter.post('/', async(req, res) => {
  const {name, email, password, club} = req.body;
  const newPresident = President({name, email, password, club});
  return newPresident.save()
    .then(data => res.json({message: "New president added Successfully", _id: data._id}))
    .catch(err => res.status(500).json(err));
});

presidentRouter.get('/', (req, res) => {
  President.find()
    .then(data => res.json({data}))
    .catch(err => res.status(500).json(err))
})

presidentRouter.post('/login', async(req, res) => {
  const {email, password} = req.body;
  President.findOne({email})
    .then(data => {
      if(data?.password === password) {
        const userData = {id: data._id, type: 'president', club: data.club, email: data.email, name: data.name}
        req.session.user = userData
        return res.json({message: 'Authenticated as a president successfully!', user: userData})
      }
      return res.status(401).json({message: 'Invalid userID or password!'})
    })
    .catch(err => res.status(500).json(err))
});

presidentRouter.post('/logout', async(req, res) => {
  req.session.user = null;
  res.json({message: 'Logged out successfully!'});
})

module.exports = presidentRouter;