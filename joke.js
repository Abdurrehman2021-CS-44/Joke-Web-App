const express = require("express");

const https = require("https");

var app = express();

app.get("/", function(rep, res){

    const url = "https://official-joke-api.appspot.com/random_joke";

    https.get(url, function(response){
        console.log(response);

        response.on("data", function(data){
            const jokeData = JSON.parse(data);
            res.write("<h1> " + jokeData.setup + "</h1>");
            res.write("<h2> " + jokeData.punchline + "</h3>");
            res.send();

        });
    });

});

app.listen(3000, function(){
    console.log("Sever is running on 3000 port.");
});