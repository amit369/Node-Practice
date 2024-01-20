var express  = require('express');
var app = express();

app.get('/home' , (req,res) => {
    res.send("hello");
})
app.listen(5000);