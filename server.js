
//Install express server
const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname + '/dist/pecahan-rupiah')));

app.get('*', (req,res) =>  {
    
res.sendFile(path.join(__dirname + '/dist/pecahan-rupiah/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    };
  };
  // Instruct the app
  // to use the forceSSL
  // middleware
  app.use(forceSSL());