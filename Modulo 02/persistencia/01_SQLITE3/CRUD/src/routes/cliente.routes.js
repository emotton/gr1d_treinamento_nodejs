const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

var db = new sqlite3.Database('../db/exemplo.db');

/**
 * @swagger
 * definitions:
 *   Client:
 *     properties:
 *       id:
 *         type: integer
 *         default: 4
 *       nome:
 *         type: string
 *         default: 'José Pereira'
 *       email:
 *         type: string
 *         default: 'jose.pereira@email.com'
 */

/**
 * @swagger
 * definitions:
 *   ClientForUpdate:
 *     properties:
 *       nome:
 *         type: string
 *         default: 'José Pereira da Silva'
 *       email:
 *         type: string
 *         default: 'jose.pereira.silva@email.com'
 */

/**
 * @swagger
 * /cliente:
 *  get:
 *      tags:
 *          - Clients
 *      description: Get all clients
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Success
 *              schema:
 *                  $ref: '#/definitions/Client' 
 */
router.get('/', (req, res) => {
    let sql = "select * from clientes order by nome";

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

/**
 * @swagger
 * /cliente/{id}:
 *  get:
 *      tags:
 *          - Clients
 *      description: Get client by id
 *      parameters:
 *        - name: id
 *          description: Client id
 *          in: path
 *          required: true
 *          type: integer      
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Success
 *              schema:
 *                  $ref: '#/definitions/Client' 
 */
router.get('/:id', (req, res) => {
    let sql = "select * from clientes where id = ?";

    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            throw err;
        }
        res.send(row);
    });
});

/**
 * @swagger
 * /cliente:
 *  post:
 *      tags:
 *          - Clients
 *      description: Create a new Client.
 *      produces:
 *          - application/json
 *      parameters:
 *        - name: client
 *          description: Client object
 *          in: body
 *          required: true
 *          schema: 
 *              $ref: '#/definitions/Client'     
 *      responses:
 *          201:
 *              description: Success
 */
router.post('/', (req, res) => {
    console.log(req.body);
    if (req.body.id) {
        let stmt = db.prepare("INSERT into clientes VALUES (?,?,?)");
        stmt.run(req.body.id, req.body.nome, req.body.email);
        res.status(201).send({
            success: true
        });
    } else {
        res.status(500).send({ msg: 'Problema no create client'});
    }
});

/**
 * @swagger
 * /cliente/{id}:
 *  put:
 *      tags:
 *          - Clients
 *      description: Update a new Client by Id
 *      produces:
 *          - application/json
 *      parameters:
 *        - name: id
 *          description: Client id
 *          in: path
 *          required: true
 *          type: integer     
 *        - name: client
 *          description: Client object
 *          in: body
 *          required: true
 *          schema: 
 *              $ref: '#/definitions/ClientForUpdate'      
 *      responses:
 *          200:
 *              description: Success
 */
router.put('/:id', (req, res) => {
    let stmt = db.prepare("UPDATE clientes set nome=?, email=? where id=?");
    stmt.run(req.body.nome, req.body.email, req.params.id);
    res.send({
        success: true
    });
});

/**
 * @swagger
 * /cliente/{id}:
 *  delete:
 *      tags:
 *          - Clients
 *      description: Delete client by id
 *      parameters:
 *        - name: id
 *          description: Client id
 *          in: path
 *          required: true
 *          type: integer      
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Success
 */
router.delete('/:id', (req, res) => {
    let stmt = db.prepare("DELETE FROM clientes where id=?");
    stmt.run(req.params.id);
    res.send({
        success: true
    });
});

module.exports = router;