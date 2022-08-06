const router = require('express').Router()
const bcrypt = require('bcrypt')
const { createToken, validateToken } = require('../jwt')
const Student = require('../models/Student')

// register
router.post('/register', async (req, res) => {

  console.log(req.body)

    try {
        // check if the user is registered
        const { email } = req.body;
        const user = await Student.findOne({ email });
        if (user) {
          return res.status(200).json({message:"Already Registered!"});
        } else {
          // generate new hashed password
          const salt = await bcrypt.genSalt(10)
          const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newStudent =  new Student({...req.body, password: hashedPassword})
        // return response
        const student = await newStudent.save()
        // generate token
        const token = createToken(student)
       return res.status(200).json(student)
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
      const user = await Student.findOne({ email : req.body.email});
      if (!user) {
        return res.status(404).send({auth: false, message:"user not found"});
      }
  
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid credentials!" });
      }
         // generate token
         const token = createToken(user)
      res.status(200).json({auth: true, token: token, user: user});
    } catch (err) {
      res.status(500).json(err);
    //   console.log(err);
    }
  });

  router.get("/:id", validateToken, async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      res.status(200).json(student);
      } catch (err) { 
        res.status(500).json(err);
      }
  })
  
  module.exports = router;
