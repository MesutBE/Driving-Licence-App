const db = require('../db-connection');

const controllers = {

    getUsers: (req, res) => {
        const sql = `SELECT * FROM user`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }

            res.json(rows);
        });
    },

    getOne: (req, res) => {
        const id = req.params.id;
        const sql = `SELECT * FROM user WHERE userId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json(rows)
        });
    },
    login: (req, res) => {
        const user = req.body;
        const sql = `SELECT userName,password,role FROM user WHERE userName = '${user.username}' AND password = '${user.password}'`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json(rows)

        });
    },
    create: (req, res) => {
        // read row data from body
        const newUser = req.body;
        const date = Date();
        //console.log(newUser.date + date);
        const sql = `INSERT INTO user(firstName, lastName,userName, email, password,country, address, mobile,secretQuestion,secretAnswer,role,createdTime)
                VALUES('${newUser.firstName}','${newUser.lastName}','${newUser.userName}','${newUser.email}','${newUser.password}','${newUser.country}','${newUser.address}','${newUser.mobile}','${newUser.secretquestion}','${newUser.secretanswer}','student','${date}')`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("New User Profile added successfully...")
        });
    },
    update: (req, res) => {
        // read row data from body
        const id = req.params.id;
        const newUser = req.body;
        const sql = `UPDATE user SET firstName= '${newUser.firstname}', lastName= '${newUser.lastname}', email='${newUser.email}', country='${newUser.country}', address='${newUser.address}', mobile='${newUser.mobile}', createdTime ='${newUser.date}' WHERE userId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("User profile updated.....")
        });
    },
    delete: (req, res) => {
        const id = req.params.id;
        const sql = `DELETE FROM user WHERE userId = ${id}`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("User Profile Deleted Successfully ...")
        });
    }
}

module.exports = controllers;