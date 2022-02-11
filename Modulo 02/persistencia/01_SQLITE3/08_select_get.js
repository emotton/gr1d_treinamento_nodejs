const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/exemplo.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the exemplo database.');
});

let sql = "select * from clientes order by nome desc";

db.get(sql, [], (err, row) => {
    if (err) {
        throw err;
    }
    console.log(row.id + "\t" + row.nome + "\t" + row.email);
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});