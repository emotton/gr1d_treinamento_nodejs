const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/exemplo.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the exemplo database.');
});

let stmt = db.prepare("INSERT into clientes VALUES (?,?,?)");

for (var i = 4; i < 10; i++) {
    stmt.run(i, "cliente " + i, "email " + i);
}

stmt.finalize();

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});