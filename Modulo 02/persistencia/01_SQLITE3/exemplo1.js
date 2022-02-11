const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:');

db.serialize(() => {

    db.run("CREATE TABLE clientes (id INTEGER, nome TEXT, email TEXT)");

    db.run("INSERT INTO clientes VALUES (1, 'Eduardo Motton', 'emotton@gmail.com')");

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