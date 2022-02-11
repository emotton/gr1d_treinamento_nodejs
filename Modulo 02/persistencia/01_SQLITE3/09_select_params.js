const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/exemplo.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the exemplo database.');
});

let sql = "select * from clientes where id >= ?";

db.all(sql, [1], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
        console.log(row.id + "\t" + row.nome + "\t" + row.email);
    });
  });

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});