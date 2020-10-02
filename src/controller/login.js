const model = require("../model/login");
const conn = require('../db.connect');


exports.loginUser = (req, res) => {
   
    model.loginUser(req, res).then(result => {
        var username = req.body.username;
        var password = req.body.password;
                if (result.length > 0) {
                    req.session.loggedin = true;
                    req.session.username = username;
                    res.redirect('/home');
                } else {
                    res.send('Incorrect Username and/or Password!');
                }			
                res.end();
            });
        }
    
