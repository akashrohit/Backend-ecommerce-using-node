// middleware.js

// Example middleware function
function exampleMiddleware(req, res, next) {
  console.log('This is an example middleware');
  next(); // Call next to proceed to the next middleware or route handler
}

module.exports = exampleMiddleware;
