var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});


con.connect(function (err) {
    if (err) throw err;
    con.query("*;", function (err, result, fields
        /*fields object is array containing information about each field as an object*/
    ) {
        if (err) throw err;
        console.log(fields);
        console.log(fields[1].name);
    });
});
