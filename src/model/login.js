const conn = require('../db.connect');

/*app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		conn.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
})*/

exports.loginUser = req => {
  
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [req.body.username, req.body.password],
                (err, result) => {
            if(!err) resolve(result);
            else reject(err);
        })
    })
};
