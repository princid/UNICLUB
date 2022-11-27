const express = require("express");

const Admin = require("../../db/models/Admin");

const adminRouter = express.Router();

adminRouter.post('/login', async(req, res) => {
  const {email, password} = req.body;
  Admin.findOne({email})
    .then(data => {
      if(data?.password === password) {
        const userData = {id: data._id, type: 'admin', email: data.email, name: data.name};
        req.session.user = userData
        return res.json({message: 'Authenticated as an admin successfully!', user: userData})
      }
      return res.status(401).json({message: 'Invalid userID or password!'})
    })
    .catch(err => res.status(500).json(err))
});

adminRouter.post('/logout', async(req, res) => {
  req.session.user = null;
  res.json({message: 'Logged out successfully!'});
})

module.exports = adminRouter;