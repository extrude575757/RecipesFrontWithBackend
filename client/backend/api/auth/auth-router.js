const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')
const router = require("express").Router();
const { jwtSecret } = require('../../config/secrets.js')
const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-service.js");

router.post("/register", (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    // hash the password
    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    // save the user to the database
    Users.add(credentials)
      .then(user => {
        res.status(201).json({ data: user });
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message: "please provide username and password and the password shoud be alphanumeric 400 post/register",
    });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (isValid(req.body)) {
    Users.findBy({ username: username })
      .then(([user]) => {
        // compare the password the hash stored in the database
        if (user && bcryptjs.compareSync(password, user.password)) {
          // // build token and send it back
          // console.log(user.id);
          const kn = user.id;
          const token = generateToken(user)
          res.status(200).json({ message: "Users API",
            subject: kn
          , token });
        } else {
          res.status(401).json({ message: "Invalid credentials You shall not pass 401 /post/auth/login" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message: "please provide username and password and the password shoud be alphanumeric /post/auth/login 400",
    });
  }
});




router.delete('/logout', (req, res) => {
// try removing manualing from raw headers and bearer authorization
  // if (req?.session) {
  //   console.log(req);
  //   console.log('why'+req?.session);
  //     req?.session.destroy((err) => {
  //         if (err) {
  //             res.status(200).json({ message: 'error logging out' });
  //         } else {
  //             res.json({ message: 'logged out' });
  //         }
  //     });
  // } else {
  //     res.end();
  // }

  let promise3 = new Promise(function (resolve,reject,next){
    try{
      console.log(res);

  if (isValid(req.body)){
    console.log(res?.session)
    if (req?.session) {
  
      req?.session.destroy((err) => {
          if (err) {
              resolve(res.status(400).json({ message: 'error logging out' }));
          } else {
              next(
                  res.json({ message: 'logged out' })
              );
          }
      });
  } else {
      reject(res.end());
  }
  }else{
    throw(e)=>{
      res.setHeader("application/json","text/html");
      
      reject(res.status(200).json( {message:"thrown 200"+e} ));
  } 
  }

    }catch(e){
        res.setHeader("application/json","text/html");
          reject(res.status(403).json({
            message: "404 Malformed issues"+e
        }));
    }
});


promise3.catch(function(error) {
  // reject("error");
  console.log('error promise3catch');
});


//   let promise3 = new Promise(function (resolve,reject){
//     try{
//         if (req?.session) {
//             req?.session.destroy((err) => {
//                 if (err) {
//                     resolve(res.status(400).json({ message: 'error logging out' }));
//                 } else {
//                     reject(
//                         res.json({ message: 'logged out' })
//                     );
//                 }
//             });
//         } else {
//             reject(res.end());
//         }
//     }catch(e){
//         res.setHeader("application/json","text/html");
//           reject(res.status(404).json({
//             message: "404 Malformed issues"+e
//         }));
//     }
//     throw(e)=>{
//         res.setHeader("application/json","text/html");
//         reject(res.status(200).json( {message:"thrown 200"+e} ));
//     }
// });


// promise3.catch(function(error) {
//   // reject("error");
//   console.log(error);
// });



});




function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  }
  const options = {
    expiresIn: 200000,
  }
  console.log(payload,jwtSecret);
  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;
