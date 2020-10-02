var mysql = require('mysql');

//koneksi mysql

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});

module.exports = connection;