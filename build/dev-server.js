// import require style of node.js
const bodyParser = require('body-parser')

// export function received application instance
module.exports = app => {
  // install middleware to analyzed json of http request body.
  app.use(bodyParser.json())

  // TODO: implement api methods
}
