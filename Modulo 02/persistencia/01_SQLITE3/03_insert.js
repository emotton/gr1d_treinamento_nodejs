const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/exemplo.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the exemplo database.');
});

db.serialize(() => {

    db.run("INSERT INTO clientes VALUES (3, 'Bheatriz Motton', 'bheatriz@gmail.com')");
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});