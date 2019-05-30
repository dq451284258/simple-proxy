var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.use(express.static('./public'));
 
app.use('/api', proxy({ 
    target: 'http://edupro.tfsitest.com',
    changeOrigin: true,
    pathRewrite:{
      "^/api":"/"
    }
}));

app.listen(8000, () => console.log('you are listening on http://localhost:8000/account.html'));