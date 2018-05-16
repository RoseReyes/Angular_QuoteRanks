
var c = require("../controllers/quotes")();
var path = require('path');

module.exports = (app) =>{
    
    app.get('/authors', (req, res) =>{
        c.displayAuthors(req, res);
    });

    app.post('/newauthor', (req, res) =>{
        c.createAuthors(req, res);
    });

    app.put("/newauthor/:id", (req, res) =>{
        c.editAuthor(req,res);
    });

    app.delete("/newauthor/:id", (req, res) =>{
        c.deleteAuthor(req, res);
    });

    app.get("/oneauthor/:id", (req, res) =>{
        c.findOneAuthor(req, res);
    });

    app.post("/newquote/:id", (req, res) =>{
        c.createQuote(req, res);
    })

    app.delete('/newquote/:id/:qId', (req, res) =>{
        c.deleteQuote(req, res);
    });

    app.post('/updatevote/:id', function (req, res) {
        c.updateVote(req, res);
    });

    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./quoterank/dist/quoterank/index.html"))
    });

    
}