
const bcrypt = require('bcrypt')

const signup = async (req, res) => {
  try {
    const user = req.body
    user.password = await bcrypt.hash(user.password, 8)

    const obj = new Parse.Object('Users', user)

    await obj.save();

    return res.status(200).send({message: "OK"})
  } catch (err) {
    console.log("err", err)

    return res.status(500).send({message: "Server ERR"})
  } 
}

const login = async (req, res) => {
  try {
    const user = req.body

    const query = new Parse.Query("Users");
    query.equalTo({username: user.username})

    const userFound = await query.find()

    if (!userFound[0]) {
      return res.status(403).send({message: "username or password incorrect"})
    }

    const isMatch = await bcrypt.compare(user.password, userFound[0].get('password'))

    if (!isMatch) {
      return res.status(401).send({message: "Auth error"})
    }
  
    return res.status(200).send({message: "OK"})
  } catch (err) {
    console.log("err", err)

    return res.status(500).send({message: "Server ERR"})
  } 
}

module.exports = {
  login,
  signup
}