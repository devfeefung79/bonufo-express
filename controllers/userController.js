const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.signup = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).send({ 'message' : 'Fields are not complete' });
  }

  User.userModel.findOne({ username: username })
  .then(dupUser => {
    if (dupUser) {
      return res.status(409).send({
        message: 'Duplicate user'
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message
    });
  })

  User.userModel.findOne({ email: email })
  .then(dupEmail => {
    if (dupEmail) {
      return res.status(409).send({
        message: 'Duplicate email'
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message
    });
  })

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User.userModel({
    username: username,
    email: email, 
    password: hashedPassword, 
    role: role,
  });
  newUser.save()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message
    });
  });
}

module.exports.login = async (req, res) => {
  const { username, email, password } = req.body;
  if ((!username && !email) || !password) {
    return res.status(400).send({ 'message' : 'Fields are not complete' });
  }

  let foundUser;
  let searchCriteria;
  if (username) {
    searchCriteria = { username: username };
  } else if (email) {
    searchCriteria = { email: email };
  }

  await User.userModel.findOne(searchCriteria)
  .then(savedUser => {
    foundUser = savedUser
  })
  .catch(err => {
    return res.status(401).send({
      message: 'No user found'
    });
  })

  const match = foundUser ? 
    await bcrypt.compare(password, foundUser.password)
    : res.status(401).send({
      message: 'No user found'
    });
  
  if (match) {
    const accessToken = jwt.sign({ 
        '_id': foundUser._id,
        'username' : foundUser.username,
        'email': foundUser.email,
        'role': foundUser.role
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30m' }
    );
    const refreshToken = jwt.sign({ 
        '_id': foundUser._id,
        'username' : foundUser.username,
        'email': foundUser.email,
        'role': foundUser.role
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '15d' }
    );

    User.userModel.findByIdAndUpdate(foundUser._id, { refreshToken : refreshToken }, { useFindAndModify: false })
      .then(() => {
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.cookie('jwt', refreshToken, {domain: 'https://bonufo-react.vercel.app', httpOnly: true, maxAge: 24 * 60 * 60 * 1000, secure: true, domain});
        res.json({ accessToken });
      })
      .catch(err => {
        res.status(401).send({
          message: err.message
        });
      })
    }
}

module.exports.getAccessToken = async (req, res) => {

  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.status(401).send({
      message: 'No jwt found'
    });
  }
  
  const refreshToken = cookies.jwt;
  let foundUser;
  await User.userModel.findOne({ refreshToken: cookies.jwt})
    .then(savedUser => {
      foundUser = savedUser
    })
    .catch(err => {
      res.status(401).send({
        message: 'No user found'
      });
    })

  if (!foundUser) {
    res.status(401).send({
      message: 'No user found'
    });
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        res.status(401).send({
          message: 'Invaild token'
        });
      }
      const accessToken = jwt.sign({ 
        '_id': foundUser._id,
        'username' : foundUser.username,
        'email': foundUser.email,
        'role': foundUser.role
      },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30m' }
      );
      res.send({ accessToken });
    }
  )
}

module.exports.logout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(204);
  }
  
  let foundUser;
  await User.userModel.findOne({ refreshToken: cookies.jwt })
    .then(savedUser => {
      foundUser = savedUser
    })
    .catch(err => {
      res.status(401).send({
        message: 'No user found'
      });
    })
    
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true });
    return res.sendStatus(204);
  }
  User.userModel.findByIdAndUpdate(foundUser._id, { $unset: { refreshToken : "" } });
  res.clearCookie('jwt', { httpOnly: true });
  res.sendStatus(204);
}

module.exports.getUserById = (req, res) => {
  const userId = req.params.id;
  User.userModel.findById(userId).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Not found question with id ${userId}`
      })
    }
    else {
      res.send(data)
    }
  }).catch(err => {
    res.status(500).send({
      message: `Error retrieving question with id ${userId}`
    })
  })
}

module.exports.updateUserById = async (req, res) => {
  const userId = req.params.id;
  const updateBody = req.body;
  let foundUser;
  await User.userModel.findById(userId).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Not found user with id ${userId}`
      })
    }
    else {
      foundUser = data;
    }
  }).catch(err => {
    res.status(500).send({
      message: `Error retrieving user with id ${userId}`
    })
  });

  let updateUser = foundUser;
  

}