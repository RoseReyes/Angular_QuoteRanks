module.exports = () => {
    require('../models/author');
    require('../models/quote');
    const mongoose = require('mongoose');
    return {
        displayAuthors: (req, res) => {
            Authors.find({}, (err, data) =>{
                if(err){
                    console.log("There's an error");
                    res.json(err);
                }
                else {
                    console.log("Success");
                    res.json(data);
                }
            });
        },
        createAuthors: (req, res) => {
            let newAuthors = new Authors ({
                name: req.body.name
            });
            newAuthors.save((err, data) =>{
                if(err){
                    console.log("Saving is unsuccessful");
                    res.json(err);
                }
                else {
                    console.log("Successfully saved");
                    res.json(data);
                }
            })
        },

        findOneAuthor: (req, res) =>{
            console.log("controllers");
            Authors.findOne({_id: req.params.id}, (err, data) =>{
                if(err){
                    console.log("There's an error");
                    res.json(err);
                }
                else {
                    console.log('Success');
                    res.json(data);
                }
            })
            
            
        },

        editAuthor: (req, res) => {
            let updateAuthor = {
                "name": req.body.name}

            Authors.updateOne({_id: req.params.id}, updateAuthor, {runValidators: true, context: 'query'}, (err, data) => {
                if(err){
                    console.log("There's an error");
                    res.json(err);
                }
                else {
                    console.log("Success");
                    res.json(data);
                }
            })

        },

        deleteAuthor: (req, res) =>{
            Authors.deleteOne({_id: req.params.id}, (err, data) =>{
                if(err){
                    console.log("Deletion is unsuccessful");
                    res.json(err);
                }
                else {
                    console.log("Successfully deleted");
                    res.json(data);
                }
            })
        },

        createQuote: (req, res) => {
            let newQuote = new Quotes ({
                quote: req.body.quote,
            })

            Authors.findOne({_id: req.params.id}, (err,data) => {
                data.auth_quotes.push(newQuote);
                data.save(data);
                newQuote.save((err,a) => {
                    if(err){
                        res.json(err);
                    }
                    else{
                        res.json(a);
                    }
                })
            })
        },
            
        deleteQuote: (req, res) => {
            Authors.findOne({_id: req.params.id},(err, data)=> {
                if (!err) {
                    data.auth_quotes.id(req.params.qId).remove();
                    data.save((newerr, newdata)=> {
                        if (err) {
                            res.json(newerr);
                        } else {
                            res.json(newdata);
                        }
                    })
                }
            });
        },

        updateVote: (req, res) => {
            Authors.findOne({_id: req.params.id} , function (err, d) {
                if (!err) {
                    let q = d.auth_quotes.id(req.body.id);
                    q.votes = q.votes + req.body.voteVal;
                    d.save((err2, a)=> {
                        if (err) {
                            res.json(err2)
                        } else {
                            res.json(a);
                        }
                    })
                }
            });
    }
}
 
}