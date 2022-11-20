
const authenticate = async (req, res, next) => {
  try {
    //TODO::
    next()
  } catch (e) {
    res.status(401).send({ error: 'Invalid authentication' })
  }
}

module.exports = {
  authenticate
}