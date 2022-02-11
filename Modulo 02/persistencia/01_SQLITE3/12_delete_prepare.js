const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/exemplo.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the exemplo database.');
});

let stmt = db.prepare("DELETE from clientes where id = ?");

for (var i = 4; i < 10; i++) {
    stmt.run(i);
}

stmt.finalize();

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});