const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const {connect} = require ("mongoose");
const {PORT, MONGODB_URL} = require("./config");

const app = express();

/**--------connect mongodb database------------ */
connect(
    MONGODB_URL,
       { usernewUrlParser: true ,useUnifiedTopology: true },
(err) =>{
     if(err) throw err;
     console.log("Myntra database connection successfully connected");
}
);


/****************Tamplate engine middleware starts here**************/
app.engine("handlebars" , exphbs());
app.set("view engine " , "handlebar");

/****************Tamplate engine middleware ends here**************/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


//*..................static assets..................*/
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules"));

//***************load ROUTS MODULES**************************/
app.use("/profiles/",require("./Routes/profiles/profile"));
app.use("/auth/", require("./Routes/auth/auth"));
app.use("/sports",require("./Routes/products/sports"));


app.listen(PORT , (err) =>{
    if(err) throw err;
    console.log("Myntra server is running on port number"+ PORT);
});