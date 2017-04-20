/**
 * Simple nodejs project in typescript
 * 
 * author: Michele Satta
 * email: michele.satta.uk@gmail.com
 */

import * as express from 'express';

let app = express();

// set directory for static content
app.use(express.static('../public'));

// listen for requests 
let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});