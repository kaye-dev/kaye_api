"use strict";
exports.__esModule = true;
var tedious_1 = require("tedious");
var server = function () {
    var config = {
        server: 'localhost',
        authentication: {
            type: 'default',
            options: {
                userName: 'kaye',
                password: ''
            }
        },
        options: {
            encrypt: true,
            database: 'mydb'
        }
    };
    var connection = new tedious_1.Connection(config);
    console.log('connection start');
    connection.on('connect', function (err) {
        // If no error, then good to proceed.
        err ? console.log('err', err) : console.log('Connected');
    });
    connection.connect();
};
server();
// FYI: https://learn.microsoft.com/ja-jp/sql/connect/node-js/step-3-proof-of-concept-connecting-to-sql-using-node-js?view=sql-server-ver16
