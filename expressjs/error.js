var express = require("express");
var app = express();

app.get("/", function (req, res) {
    for(let i=0; i<=10; i++){
        if(i === 5){
            next('there ws an error');
        }else{
            res.write(a);
        }
    }
    res.send(a);
   
});

// 404 error handler 
app.use((req, res, next) => {
    res.send('Requested url is not found');
})

app.use((err, req, res, next) =>{
    if(err.message){
        res.status(500).send(err.message);
    }else{
        res.status(500).send('There was an error !');
    }
});

app.listen(3000, () =>{
    console.log("app listening at port 3000");
});
