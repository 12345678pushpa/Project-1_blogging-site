const express = require("express")
const bodyParser = require("body-parser")
const route = require("./routes/route")
const mongoose = require("mongoose");
const { Router } = require("express");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://pushpa12345678:cgcJnwdd7jxZbIMJ@cluster0.s65iq.mongodb.net/pushpa143',
{
useNewurlParser: true,
useUnifiedTopology: true,
})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
