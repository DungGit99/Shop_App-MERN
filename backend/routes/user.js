const express = require('express');
const router = express.Router();

const { User } = require('../models/User');
const { auth } = require('../middleware/auth');

router.post('/api/register',(req,res) => {
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err});
    return res.status(200).json({
      userInfo
    })
  })
})

router.post('/api/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false,
        message: "Đăng nhập không thành công"
      })
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch){
        return res.json({ loginSuccess: false, message: "Mật khẩu không chính xác" });
      }
      user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
          res.cookie("w_authExp", user.tokenExp);
          res.cookie("w_auth", user.token).status(200).json({
                  loginSuccess: true, 
                  userId: user._id,
                  token: user.token,
                  message: "Đăng nhập thành công"
          });
      });
    });
  })
})
router.get('/api/logout', auth, (req, res) => {
  User.findOneAndUpdate({_id: req.user._id}, { token: ""}, (err, user) => {
    if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true
    });
  })
})

router.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id:  req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})





module.exports = router;