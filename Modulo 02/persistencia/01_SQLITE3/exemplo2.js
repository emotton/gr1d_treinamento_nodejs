const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/exemplo.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the exemplo database.');
});

db.serialize(() => {

    // db.run("CREATE TABLE IF NOT EXISTS clientes (id INTEGER, nome TEXT, email TEXT)");

    db.run("INSERT INTO clientes VALUES (3, 'Bheatriz Motton', 'bheatriz@gmail.com')");

    db.each(`SELECT * FROM clientes`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.id + "\t" + row.nome + "\t" + row.email);
    });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});