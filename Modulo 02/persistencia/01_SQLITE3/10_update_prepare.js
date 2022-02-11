const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/exemplo.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the exemplo database.');
});

let stmt = db.prepare("UPDATE clientes set nome = ? where id = ?");
stmt.run('Eduardo F Motton', 1);
stmt.finalize();

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});