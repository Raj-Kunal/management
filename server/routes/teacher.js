const router = require('express').Router()
const bcrypt = require('bcrypt')
const Teacher = require('../models/Teacher')
const { createToken } = require('../jwt')
// register
router.post('/register', async (req, res) => {


    try {
        // check if the user is registered
        const { email } = req.body;
        const user = await Teacher.findOne({ email });
        if (user) {
            return res.status(200).json({message:"Already Registered!"});
         } else {
             // generate new hashed password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newTeacher =  new Teacher({...req.body, password: hashedPassword})
        // return response
        const teacher = await newTeacher.save()
        return res.status(200).json(teacher)
         }
       
    } catch (err) {
      console.log(err)
       return res.status(500).json(err)
    }

})

// Login 

router.post("/login", async (req, res) => {
    try {
      // const { email } = req.body;
      const user = await Teacher.findOne({ email : req.body.email});
      if (!user) {
        return res.status(404).send({auth: false, message:"user not found"});
      }
  
      const validPassword =  bcrypt.compare(req.body.password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid credentials!" });
      }
       // generate token
       const token = createToken(user)
       res.status(200).json({auth: true, token: token, user: user});
        } catch (err) {
        console.log(err);
      return res.status(500).json(err);
    }
  });
  
  module.exports = router;
